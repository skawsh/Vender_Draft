
import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { DateRange } from "react-day-picker";
import {
  todayPendingPayments,
  yesterdayPendingPayments,
  thisWeekPendingPayments,
  thisMonthPendingPayments,
  todayPaymentHistory,
  yesterdayPaymentHistory,
  thisWeekPaymentHistory,
  thisMonthPaymentHistory,
  defaultRevenueSummary
} from './revenueData';

export const useRevenueData = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("pending");
  const [dateFilter, setDateFilter] = useState("all");
  const [washTypeFilter, setWashTypeFilter] = useState("all");
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  
  const [pendingPaymentsData, setPendingPaymentsData] = useState(thisWeekPendingPayments);
  const [paymentHistoryData, setPaymentHistoryData] = useState(thisWeekPaymentHistory);
  const [revenueSummary, setRevenueSummary] = useState(defaultRevenueSummary);

  const filterDataByWashType = (data) => {
    if (washTypeFilter === "all") return data;
    
    return data.filter(item => {
      const washType = item.washType.toLowerCase();
      if (washTypeFilter === "express") return washType.includes("quick");
      if (washTypeFilter === "standard") return washType.includes("standard");
      return true;
    });
  };

  const getFilteredPendingPayments = () => {
    const washTypeFiltered = filterDataByWashType(pendingPaymentsData);
    return washTypeFiltered.filter(payment => 
      searchQuery === "" || 
      payment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getFilteredPaymentHistory = () => {
    const washTypeFiltered = filterDataByWashType(paymentHistoryData);
    return washTypeFiltered.filter(payment => 
      searchQuery === "" || 
      payment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const viewOrderDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
    
    // Find the order in either pending payments or payment history
    const order = [...pendingPaymentsData, ...paymentHistoryData].find(
      order => order.orderId === orderId
    );
    
    if (order) {
      toast.info(`Viewing details for order ${orderId}`, {
        description: `${order.customerName}'s ${order.washType} order`
      });
    }
  };

  useEffect(() => {
    switch(dateFilter) {
      case "today":
        setPendingPaymentsData(todayPendingPayments);
        setPaymentHistoryData(todayPaymentHistory);
        setRevenueSummary({
          todayEarnings: 1500,
          quickWashEarnings: 1030,
          standardWashEarnings: 780,
          combinedWashEarnings: 0,
          pendingPayments: 1230,
          lastMonthRevenue: 28500,
          totalRevenue: 142500
        });
        toast.info("Showing today's data");
        break;
      case "yesterday":
        setPendingPaymentsData(yesterdayPendingPayments);
        setPaymentHistoryData(yesterdayPaymentHistory);
        setRevenueSummary({
          todayEarnings: 0,
          quickWashEarnings: 730,
          standardWashEarnings: 1140,
          combinedWashEarnings: 0,
          pendingPayments: 1490,
          lastMonthRevenue: 28500,
          totalRevenue: 142500
        });
        toast.info("Showing yesterday's data");
        break;
      case "thisWeek":
        setPendingPaymentsData(thisWeekPendingPayments);
        setPaymentHistoryData(thisWeekPaymentHistory);
        setRevenueSummary({
          todayEarnings: 1500,
          quickWashEarnings: 2750,
          standardWashEarnings: 2950,
          combinedWashEarnings: 1320,
          pendingPayments: 2847,
          lastMonthRevenue: 28500,
          totalRevenue: 142500
        });
        toast.info("Showing this week's data");
        break;
      case "thisMonth":
        setPendingPaymentsData(thisMonthPendingPayments);
        setPaymentHistoryData(thisMonthPaymentHistory);
        setRevenueSummary({
          todayEarnings: 1500,
          quickWashEarnings: 7820,
          standardWashEarnings: 9250,
          combinedWashEarnings: 4150,
          pendingPayments: 3185,
          lastMonthRevenue: 28500,
          totalRevenue: 142500
        });
        toast.info("Showing this month's data");
        break;
      case "customRange":
        if (dateRange?.from && dateRange?.to) {
          setPendingPaymentsData(thisMonthPendingPayments);
          setPaymentHistoryData(thisMonthPaymentHistory);
          setRevenueSummary({
            todayEarnings: 0,
            quickWashEarnings: 4580,
            standardWashEarnings: 6320,
            combinedWashEarnings: 2845,
            pendingPayments: 3185,
            lastMonthRevenue: 28500,
            totalRevenue: 142500
          });
          toast.info(`Showing data from ${dateRange.from.toLocaleDateString()} to ${dateRange.to.toLocaleDateString()}`);
        }
        break;
      default:
        setPendingPaymentsData(thisWeekPendingPayments);
        setPaymentHistoryData(thisWeekPaymentHistory);
        setRevenueSummary(defaultRevenueSummary);
        if (dateFilter !== "") {
          toast.info("Showing data for all dates");
        }
    }
  }, [dateFilter, dateRange]);

  return {
    dateRange,
    setDateRange,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    dateFilter,
    setDateFilter,
    washTypeFilter,
    setWashTypeFilter,
    selectedOrderId,
    setSelectedOrderId,
    pendingPaymentsData,
    paymentHistoryData,
    revenueSummary,
    getFilteredPendingPayments,
    getFilteredPaymentHistory,
    viewOrderDetails
  };
};

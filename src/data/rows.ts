export type RowData = {
  job: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  due: string;
  value: string;
};

export const data: RowData[] = [
  { job: "Launch social media campaign", submitted: "15-11-2024", status: "In-process", submitter: "Aisha Patel", url: "www.aishapatel.com", assigned: "Sophie Choudhury", priority: "Medium", due: "20-11-2024", value: "6,200,000 ₹" },
  { job: "Update press kit", submitted: "28-10-2024", status: "Need to start", submitter: "Irfan Khan", url: "www.irfankhan.com", assigned: "Tejas Pandey", priority: "High", due: "30-10-2024", value: "3,500,000 ₹" },
  { job: "Finalize user testing", submitted: "05-12-2024", status: "In-process", submitter: "Mark Johnson", url: "www.markjohnson.com", assigned: "Rachel Lee", priority: "Medium", due: "10-12-2024", value: "4,750,000 ₹" },
  { job: "Design new features", submitted: "10-01-2025", status: "Complete", submitter: "Emily Green", url: "www.emilygreen.com", assigned: "Tom Wright", priority: "Low", due: "15-01-2025", value: "5,900,000 ₹" },
  { job: "Prepare financial report", submitted: "25-01-2025", status: "Blocked", submitter: "Jessica Brown", url: "www.jessicabrown.com", assigned: "Kevin Smith", priority: "Low", due: "30-01-2025", value: "2,800,000 ₹" },
];

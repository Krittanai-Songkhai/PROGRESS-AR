// ใส่ค่าจาก Supabase -> Project Settings -> API เพื่อให้ทุกคนที่เปิดเว็บเชื่อมต่ออัตโนมัติ
// (ปล่อยว่างได้ แล้วกรอกในหน้าเว็บที่ปุ่ม "เข้าสู่ระบบ / ตั้งค่า" แทน)
// anon key เป็นกุญแจสาธารณะ ใส่ได้ ห้ามใส่ service_role key เด็ดขาด
window.MP_CONFIG = {
  mode: "supabase",
  sbUrl: "https://htgwjifqgkzlxnenkkms.supabase.co/rest/v1/",   // เช่น "https://abcdxyz.supabase.co"
  sbKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0Z3dqaWZxZ2t6bHhuZW5ra21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzM5NTQsImV4cCI6MjEwNzQ0OTk1NH0.EJGSouL4piqAJ8dhP-LvIgK3Z2LyuvB2rQANGaLUuGE"    // anon public key
};

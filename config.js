// ใส่ค่าจาก Supabase -> Project Settings -> API เพื่อให้ทุกคนที่เปิดเว็บเชื่อมต่ออัตโนมัติ
// (ปล่อยว่างได้ แล้วกรอกในหน้าเว็บที่ปุ่ม "เข้าสู่ระบบ / ตั้งค่า" แทน)
// anon key เป็นกุญแจสาธารณะ ใส่ได้ ห้ามใส่ service_role key เด็ดขาด
window.MP_CONFIG = {
  mode: "supabase",
  sbUrl: "",   // เช่น "https://abcdxyz.supabase.co"
  sbKey: ""    // anon public key
};

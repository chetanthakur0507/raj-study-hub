import { CONTACT, SITE } from './constants';

export interface RegistrationData {
  name: string;
  gender: string;
  category: string;
  dob: string;
  mobile: string;
  email: string;
  fatherName: string;
  fatherMobile: string;
  aadharNo: string;
  address: string;
  exam: string;
  shift: string;
  seatType: string;
  hasPhoto: boolean;
}

export function formatRegistrationMessage(data: RegistrationData): string {
  const lines = [
    `📋 *NEW REGISTRATION — ${SITE.name}*`,
    '',
    `👤 *Student Details*`,
    `• Name: ${data.name}`,
    `• Gender: ${data.gender}`,
    `• Category: ${data.category}`,
    `• Date of Birth: ${data.dob}`,
    `• Mobile: ${data.mobile}`,
    `• Email: ${data.email}`,
    `• Aadhaar No.: ${data.aadharNo}`,
    '',
    `👨‍👦 *Father/Guardian Details*`,
    `• Father's Name: ${data.fatherName}`,
    `• Father's Mobile: ${data.fatherMobile}`,
    '',
    `📚 *Admission Details*`,
    `• Exam/Course: ${data.exam}`,
    `• Preferred Shift: ${data.shift}`,
    `• Seat Type: ${data.seatType}`,
    `• Address: ${data.address}`,
    `• Photo Uploaded: ${data.hasPhoto ? 'Yes' : 'No'}`,
    '',
    `📅 Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
  ];
  return lines.join('\n');
}

export function formatRegistrationEmailHtml(data: RegistrationData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#ca8a04;border-bottom:2px solid #ca8a04;padding-bottom:8px;">
        New Registration — ${SITE.name}
      </h2>
      <h3 style="color:#333;">Student Details</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px;font-weight:bold;">Name</td><td style="padding:6px;">${data.name}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:6px;font-weight:bold;">Gender</td><td style="padding:6px;">${data.gender}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Category</td><td style="padding:6px;">${data.category}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:6px;font-weight:bold;">Date of Birth</td><td style="padding:6px;">${data.dob}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Mobile</td><td style="padding:6px;">${data.mobile}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:6px;font-weight:bold;">Email</td><td style="padding:6px;">${data.email}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Aadhaar No.</td><td style="padding:6px;">${data.aadharNo}</td></tr>
      </table>
      <h3 style="color:#333;">Father/Guardian Details</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px;font-weight:bold;">Father's Name</td><td style="padding:6px;">${data.fatherName}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:6px;font-weight:bold;">Father's Mobile</td><td style="padding:6px;">${data.fatherMobile}</td></tr>
      </table>
      <h3 style="color:#333;">Admission Details</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px;font-weight:bold;">Exam/Course</td><td style="padding:6px;">${data.exam}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:6px;font-weight:bold;">Preferred Shift</td><td style="padding:6px;">${data.shift}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Seat Type</td><td style="padding:6px;">${data.seatType}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:6px;font-weight:bold;">Address</td><td style="padding:6px;">${data.address}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Photo Uploaded</td><td style="padding:6px;">${data.hasPhoto ? 'Yes' : 'No'}</td></tr>
      </table>
      <p style="color:#666;font-size:12px;margin-top:20px;">
        Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      </p>
    </div>
  `;
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl(data: RegistrationData): string {
  const subject = encodeURIComponent(`New Registration — ${data.name} | ${SITE.name}`);
  const body = encodeURIComponent(formatRegistrationMessage(data));
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}

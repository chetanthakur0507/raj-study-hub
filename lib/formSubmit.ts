import { CONTACT } from './constants';

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT.formSubmitEmail}`;

function appendFormSubmitMeta(formData: FormData, subject: string) {
  formData.append('_subject', subject);
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');
}

export async function submitToFormSubmit(
  fields: Record<string, string>,
  subject: string
): Promise<void> {
  const response = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Form submission failed');
  }
}

export async function submitFormDataToFormSubmit(
  formData: FormData,
  subject: string
): Promise<void> {
  appendFormSubmitMeta(formData, subject);

  const response = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Form submission failed');
  }
}

export function notifyOwnerWhatsApp(message: string) {
  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

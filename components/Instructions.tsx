'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/constants';

const rules = [
  { title: 'Maintain Cleanliness', hindi: 'साफ-सफाई का ध्यान रखें। कूड़ा हमेशा कूड़ेदान में ही डालें।' },
  { title: 'Keep Mobile Phones Silent', hindi: 'लाइब्रेरी में अपना मोबाइल हमेशा साइलेंट मोड पर रखें।' },
  { title: 'No Phone Calls Inside', hindi: 'लाइब्रेरी के अंदर फोन पर बात न करें। आवश्यक होने पर बाहर जाकर बात करें।' },
  { title: 'Maintain Silence', hindi: 'लाइब्रेरी में आपस में बातचीत न करें। शांत वातावरण बनाए रखें।' },
  { title: 'Respect Others', hindi: 'किसी भी छात्र के साथ अभद्र भाषा, गाली-गलौज या झगड़ा न करें।' },
  { title: 'No Smoking or Tobacco', hindi: 'चिंगम, गुटखा, तंबाकू, धूम्रपान या किसी भी नशीले पदार्थ का प्रयोग पूर्णतः प्रतिबंधित है।' },
  { title: 'Handle Furniture Carefully', hindi: 'फर्नीचर, डेस्क, कुर्सी एवं अन्य सामान का सावधानीपूर्वक उपयोग करें। किसी भी नुकसान की भरपाई संबंधित छात्र को करनी होगी।' },
  { title: 'No Writing on Furniture', hindi: 'फर्नीचर, दीवारों या अध्ययन डेस्क पर कुछ भी न लिखें।' },
  { title: 'Sleeping is Not Allowed', hindi: 'लाइब्रेरी में सोना प्रतिबंधित है। यह अध्ययन के लिए समर्पित स्थान है।' },
  { title: 'Follow Digital Attendance Rules', hindi: 'डिजिटल अटेंडेंस एवं QR एंट्री सिस्टम का सही उपयोग करें।' },
  { title: 'Do Not Share QR Access', hindi: 'अपना QR कोड, लॉगिन या प्रवेश अधिकार किसी अन्य व्यक्ति के साथ साझा न करें।' },
  { title: 'CCTV Surveillance', hindi: 'पूरी लाइब्रेरी CCTV निगरानी में है। किसी भी अनुचित गतिविधि से बचें।' },
  { title: 'Authorized Access Only', hindi: 'केवल पंजीकृत (Registered) छात्रों को ही प्रवेश की अनुमति है।' },
  { title: 'Keep Your Belongings Safe', hindi: 'अपनी पुस्तकों, मोबाइल, लैपटॉप एवं अन्य सामान की सुरक्षा स्वयं करें।' },
  { title: 'No Unauthorized Removal of Items', hindi: 'लाइब्रेरी की किसी भी वस्तु को बिना अनुमति बाहर ले जाना प्रतिबंधित है।' },
  { title: 'Respect Study Environment', hindi: 'अन्य छात्रों के अध्ययन में बाधा उत्पन्न करने वाली किसी भी गतिविधि से बचें।' },
  { title: 'Charging Point Usage', hindi: 'चार्जिंग पॉइंट का उपयोग जिम्मेदारी से करें। किसी भी प्रकार की छेड़छाड़ न करें।' },
  { title: 'Report Problems Immediately', hindi: 'किसी भी समस्या, शिकायत या सुझाव के लिए प्रबंधन से तुरंत संपर्क करें।' },
  { title: 'Follow Management Instructions', hindi: 'प्रबंधन द्वारा समय-समय पर दिए गए निर्देशों का पालन करना सभी छात्रों के लिए अनिवार्य है।' },
  { title: 'Violation of Rules', hindi: 'नियमों का उल्लंघन करने पर प्रवेश निलंबित या सदस्यता समाप्त की जा सकती है।' },
  { title: 'Focus on Your Goals', hindi: 'यह स्थान गंभीर और समर्पित छात्रों के लिए बनाया गया है। अपने लक्ष्य पर ध्यान केंद्रित रखें।' },
];

export default function Instructions() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#141c28] to-[#0a0e14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">GUIDELINES</p>
          <h2 className="text-4xl md:text-5xl font-black gold-gradient-text mb-2">
            Student Instructions & Guidelines
          </h2>
          <p className="text-gray-400">(छात्र निर्देश एवं नियम)</p>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-4">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              className="premium-card p-5 flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <span className="flex-shrink-0 w-8 h-8 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 text-sm font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold text-yellow-400 mb-1">{rule.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{rule.hindi}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 premium-card p-8 border-l-4 border-l-yellow-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Message to Students</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Discipline, consistency, and hard work are the foundations of success. Let us work together to maintain a peaceful, clean, and productive study environment for everyone.
          </p>
          <p className="text-gray-400 leading-relaxed italic">
            अनुशासन, निरंतरता और मेहनत ही सफलता की पहचान हैं। आइए, मिलकर एक शांत, स्वच्छ और प्रेरणादायक अध्ययन वातावरण बनाए रखें।
          </p>
          <p className="text-yellow-400/80 font-semibold mt-6 text-center">{SITE.tagline}</p>
        </motion.div>
      </div>
    </section>
  );
}

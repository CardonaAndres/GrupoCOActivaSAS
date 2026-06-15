import { HelpCircle } from 'lucide-react';
import { FAQItem } from '@/interfaces/faq.interfaces';

interface Props {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export const FAQSection = ({ title, subtitle, faqs }: Props) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-700 shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
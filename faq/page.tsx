export default function FAQ() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, browse our shop, select the artwork you'd like to purchase, and add it to your cart. Then, proceed to checkout and follow the instructions to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on the destination."
    },
    // Add more FAQs as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


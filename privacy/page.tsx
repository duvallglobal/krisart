export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At Dauntless Arts, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.
        </p>
        {/* Add more content for your privacy policy here */}
      </div>
    </div>
  )
}


export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Welcome to Dauntless Arts. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use.
        </p>
        {/* Add more content for your terms of service here */}
      </div>
    </div>
  )
}


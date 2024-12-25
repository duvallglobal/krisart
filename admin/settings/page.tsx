'use client'

import { useState } from 'react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'Dauntless Arts',
    siteDescription: 'Innovative murals and custom artwork',
    contactEmail: 'contact@dauntlessarts.com',
    socialMedia: {
      facebook: 'https://facebook.com/dauntlessarts',
      instagram: 'https://instagram.com/dauntlessarts',
      twitter: 'https://twitter.com/dauntlessarts',
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: value,
    }))
  }

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings(prevSettings => ({
      ...prevSettings,
      socialMedia: {
        ...prevSettings.socialMedia,
        [name]: value,
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the settings to your backend
    console.log('Settings saved:', settings)
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Name</label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">Site Description</label>
          <input
            type="text"
            id="siteDescription"
            name="siteDescription"
            value={settings.siteDescription}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Social Media</h2>
          <div className="space-y-2">
            <div>
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook</label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={settings.socialMedia.facebook}
                onChange={handleSocialMediaChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram</label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={settings.socialMedia.instagram}
                onChange={handleSocialMediaChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">Twitter</label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={settings.socialMedia.twitter}
                onChange={handleSocialMediaChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Save Settings
        </button>
      </form>
    </div>
  )
}


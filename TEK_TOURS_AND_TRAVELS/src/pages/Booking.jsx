import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard,
  Check,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Sparkles,
  Shield
} from 'lucide-react';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    packageType: '',
    departureDate: '',
    returnDate: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'Uganda',
    paymentMethod: 'bank_transfer',
    agreeToTerms: false
  });

  const totalSteps = 4;

  // Mock data - will come from API
  const destinations = [
    { id: 'bwindi', name: 'Bwindi Impenetrable Forest', country: 'Uganda' },
    { id: 'murchison', name: 'Murchison Falls National Park', country: 'Uganda' },
    { id: 'queen-elizabeth', name: 'Queen Elizabeth National Park', country: 'Uganda' },
    { id: 'jinja', name: 'Jinja - Source of the Nile', country: 'Uganda' },
    { id: 'volcanoes', name: 'Volcanoes National Park', country: 'Rwanda' },
    { id: 'akagera', name: 'Akagera National Park', country: 'Rwanda' },
    { id: 'maasai-mara', name: 'Maasai Mara Reserve', country: 'Kenya' },
    { id: 'amboseli', name: 'Amboseli National Park', country: 'Kenya' },
    { id: 'serengeti', name: 'Serengeti National Park', country: 'Tanzania' },
    { id: 'zanzibar', name: 'Zanzibar Islands', country: 'Tanzania' }
  ];

  const packageTypes = [
    { id: 'budget', name: 'Budget Safari', price: 1200, description: 'Comfortable camps, shared transport' },
    { id: 'standard', name: 'Standard Safari', price: 2500, description: 'Mid-range lodges, quality experience' },
    { id: 'luxury', name: 'Luxury Safari', price: 4500, description: 'Premium lodges, exclusive service' },
    { id: 'gorilla', name: 'Gorilla Trekking', price: 3800, description: 'Gorilla permits included' },
    { id: 'cultural', name: 'Cultural Experience', price: 1800, description: 'Immersive local culture' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will send to API endpoint
    console.log('Booking data:', formData);
    alert('Booking submitted! We will contact you shortly via email and phone.');
  };

  const calculateTotal = () => {
    const selectedPackage = packageTypes.find(p => p.id === formData.packageType);
    if (!selectedPackage) return 0;
    
    const basePrice = selectedPackage.price;
    const adultsTotal = basePrice * formData.numberOfAdults;
    const childrenTotal = (basePrice * 0.5) * formData.numberOfChildren;
    
    return adultsTotal + childrenTotal;
  };

  const stepTitles = [
    'Select Your Journey',
    'Group Details',
    'Contact Information',
    'Review & Confirm'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50">
      {/* Hero Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80"
          alt="Booking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span 
                className="text-amber-200 text-sm tracking-widest uppercase font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Reserve Your Adventure
              </span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book Your Dream Safari
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 -mt-16 relative z-10 pb-20">
        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>

              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center relative">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep >= step 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg scale-110' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {currentStep > step ? <Check className="w-6 h-6" /> : step}
                  </div>
                  <span 
                    className={`text-xs mt-2 text-center hidden sm:block transition-all ${
                      currentStep >= step ? 'text-amber-700 font-semibold' : 'text-gray-500'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif", maxWidth: '80px' }}
                  >
                    {stepTitles[step - 1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Step Title (Mobile) */}
          <div className="sm:hidden text-center mb-6">
            <h2 
              className="text-xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {stepTitles[currentStep - 1]}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Tour Selection */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 hidden sm:block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Select Your Destination
                </h3>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Destination *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <option value="">Choose your dream destination...</option>
                    {destinations.map(dest => (
                      <option key={dest.id} value={dest.id}>
                        {dest.name} - {dest.country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Package Type *
                  </label>
                  <div className="grid gap-3">
                    {packageTypes.map(pkg => (
                      <label
                        key={pkg.id}
                        className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.packageType === pkg.id
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="packageType"
                          value={pkg.id}
                          checked={formData.packageType === pkg.id}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-4 h-4 text-amber-600"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <span 
                              className="font-bold text-gray-900"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {pkg.name}
                            </span>
                            <span 
                              className="text-amber-700 font-bold text-lg"
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              ${pkg.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Return Date *
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      required
                      min={formData.departureDate}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Traveler Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 hidden sm:block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Number of Travelers
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Adults (18+) *
                    </label>
                    <input
                      type="number"
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="20"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Children (0-17)
                    </label>
                    <input
                      type="number"
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleInputChange}
                      min="0"
                      max="10"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about any special requests, dietary requirements, or accessibility needs..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  />
                </div>

                {/* Price Preview */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                  <h4 
                    className="font-bold text-gray-900 mb-4 flex items-center gap-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    Price Estimate
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Adults ({formData.numberOfAdults})</span>
                      <span className="font-semibold text-gray-900">
                        ${(packageTypes.find(p => p.id === formData.packageType)?.price || 0) * formData.numberOfAdults}
                      </span>
                    </div>
                    {formData.numberOfChildren > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Children ({formData.numberOfChildren}) - 50% off</span>
                        <span className="font-semibold text-gray-900">
                          ${((packageTypes.find(p => p.id === formData.packageType)?.price || 0) * 0.5) * formData.numberOfChildren}
                        </span>
                      </div>
                    )}
                    <div className="border-t-2 border-amber-300 mt-3 pt-3">
                      <div className="flex justify-between items-center">
                        <span 
                          className="text-lg font-bold text-gray-900"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Estimated Total
                        </span>
                        <span 
                          className="text-3xl font-bold text-amber-700"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          ${calculateTotal()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 hidden sm:block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Your Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+256 700 000 000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Country of Residence *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  >
                    <option value="Uganda">Uganda</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Burundi">Burundi</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 hidden sm:block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Review & Confirm
                </h3>

                <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <h4 
                    className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Check className="w-5 h-5 text-amber-600" />
                    Booking Summary
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-600">Destination:</span>
                      <span className="font-semibold text-gray-900 text-right">
                        {destinations.find(d => d.id === formData.destination)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-semibold text-gray-900">
                        {packageTypes.find(p => p.id === formData.packageType)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-600">Travel Dates:</span>
                      <span className="font-semibold text-gray-900">
                        {formData.departureDate} to {formData.returnDate}
                      </span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-600">Travelers:</span>
                      <span className="font-semibold text-gray-900">
                        {formData.numberOfAdults} Adult{formData.numberOfAdults > 1 ? 's' : ''}
                        {formData.numberOfChildren > 0 && `, ${formData.numberOfChildren} Child${formData.numberOfChildren > 1 ? 'ren' : ''}`}
                      </span>
                    </div>
                    <div className="border-t-2 border-amber-300 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span 
                          className="text-lg font-bold text-gray-900"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Total Amount:
                        </span>
                        <span 
                          className="text-3xl font-bold text-amber-700"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          ${calculateTotal()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-semibold text-gray-700 mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Payment Method *
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'bank_transfer', name: 'Bank Transfer', icon: '🏦' },
                      { id: 'mobile_money', name: 'Mobile Money (MTN/Airtel)', icon: '📱' },
                      { id: 'pay_later', name: 'Reserve Now, Pay Later', icon: '⏰' }
                    ].map(method => (
                      <label
                        key={method.id}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.paymentMethod === method.id
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-amber-600"
                        />
                        <span className="text-2xl ml-3">{method.icon}</span>
                        <span 
                          className="ml-3 text-gray-900 font-medium"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {method.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-1">Payment Instructions</p>
                    <p>After submitting, you will receive payment instructions via email and SMS. A deposit of 30% is required to confirm your booking.</p>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex gap-3">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-900">
                    <p className="font-semibold mb-1">Secure Booking</p>
                    <p>Your information is protected with industry-standard encryption. We never share your personal data.</p>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 text-amber-600 mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-amber-600 hover:underline font-semibold">Terms & Conditions</a> and <a href="#" className="text-amber-600 hover:underline font-semibold">Cancellation Policy</a> *
                  </span>
                </label>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t-2 border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ml-auto shadow-lg"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 ml-auto shadow-xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Check className="w-5 h-5" />
                  Complete Booking
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Booking;
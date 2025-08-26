import React from 'react';
import { Phone, Mail, MapPin, Star, Leaf, Clock, Award, Users, ChefHat, Heart, Zap } from 'lucide-react';

function App() {
  const products = [
    {
      name: "Classic Green Chilly Papad",
      description: "Our signature green chilly papad with perfect spice balance and crispy texture",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹150/kg"
    },
    {
      name: "Extra Spicy Green Chilly Papad",
      description: "For spice lovers - intense green chilly flavor with extra heat",
      image: "https://images.pexels.com/photos/8448347/pexels-photo-8448347.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹180/kg"
    },
    {
      name: "Mild Green Chilly Papad",
      description: "Perfect for families - mild green chilly taste with gentle spice",
      image: "https://images.pexels.com/photos/6419730/pexels-photo-6419730.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹130/kg"
    },
    {
      name: "Premium Green Chilly Papad",
      description: "Premium quality with finest green chillies and traditional sun-drying",
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹200/kg"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "Green Chilly Specialists",
      description: "Experts in creating the perfect green chilly papad with authentic taste"
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Fresh Green Chillies",
      description: "Only the freshest green chillies sourced from local farms"
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Traditional Sun-Drying",
      description: "Sun-dried using traditional methods to preserve authentic flavors"
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: "Spice Perfection",
      description: "Perfect balance of spice and flavor in every single papad"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-3">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Jiswad</h1>
                <p className="text-orange-100 text-sm">Green Chilly Papad Specialists Since 1990</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Spicy
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600"> Green Chilly </span>
                  Papads
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the perfect blend of spice and crunch with our specialty green chilly papads, made with the freshest ingredients and traditional methods.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">500+ Happy Customers</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  Order Now
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                  View Products
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Traditional Indian Papads" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-green-500 rounded-full p-4 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-500 rounded-full p-4 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Green Chilly Papad Collection</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our specialty green chilly papads, each variety crafted with different spice levels to suit every taste preference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
                <div className="rounded-t-2xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Jiswad?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize exclusively in green chilly papads, perfecting our craft to deliver unmatched spice and flavor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-800">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Since 1990, Jiswad has been the go-to destination for green chilly papad lovers. What started as a passion for creating the perfect spicy papad has grown into a specialized business serving spice enthusiasts across the region.
                </p>
                <p className="text-lg">
                  We believe in specialization - by focusing exclusively on green chilly papads, we've perfected our recipes and techniques. Our papads are sun-dried using traditional methods, ensuring that each piece delivers the perfect spicy kick.
                </p>
                <p className="text-lg">
                  Every papad is made with carefully selected fresh green chillies and premium ingredients. We take pride in adding that perfect spicy touch to your family meals and celebrations.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">35+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">800+</div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600 font-medium">Fresh Chillies</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8448347/pexels-photo-8448347.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Traditional papad making process" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <Zap className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-4">Ready to Order?</h3>
                <p className="text-xl text-orange-100 leading-relaxed">
                  Contact us today for fresh, authentic papads delivered right to your doorstep. We serve the local community with love and dedication.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-orange-100">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-orange-100">orders@jiswad.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-orange-100">456 Spice Market, Rajkot Road<br />Ahmedabad, Gujarat 380015</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
              <h4 className="text-2xl font-bold mb-6">Place Your Order</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-orange-100 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-orange-100 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea 
                  placeholder="Your Order Details (e.g., 2kg Classic Green Chilly, 1kg Extra Spicy)" 
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-orange-100 text-white focus:outline-none focus:ring-2 focus:ring-white resize-none"
                ></textarea>
                <button className="w-full bg-white text-green-600 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors duration-300">
                  Send Order Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 rounded-full p-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h5 className="text-xl font-bold">Jiswad</h5>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Specializing in green chilly papads with perfect spice balance and premium quality since 1990. Your spicy satisfaction is our priority.
              </p>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-4">Our Products</h6>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-green-400 transition-colors cursor-pointer">Classic Green Chilly Papad</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Extra Spicy Green Chilly Papad</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Mild Green Chilly Papad</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Premium Green Chilly Papad</li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-4">Business Hours</h6>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 9:00 AM - 6:00 PM</p>
                <p className="text-green-400 font-semibold">Fresh papads delivered daily!</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Jiswad. All rights reserved. | Made with 🌶️ for spice lovers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
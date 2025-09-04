"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Asosiy = () => {
  const [activeTab, setActiveTab] = useState("Barcha kurslar")
  const [qoraTema, setQoraTema] = useState(true)
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://fn3.fixoo.uz/courses')
        const result = await response.json()
        
        if (result.success) {
          setCourses(result.data)
        } else {
          setError('Kurslarni yuklashda xatolik yuz berdi')
        }
      } catch (err) {
        setError('Internet aloqasida muammo bor')
        console.error('Error fetching courses:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  // Map API levels to Uzbek
  const getLevelText = (level) => {
    switch (level) {
      case 'BEGINNER': return 'Boshlang\'ich'
      case 'INTERMEDIATE': return 'O\'rta'
      case 'ADVANCED': return 'Yuqori'
      default: return 'Noma\'lum'
    }
  }

  // Get category name in Uzbek (you might need to create a mapping)
  const getCategoryInUzbek = (categoryName) => {
    const categoryMap = {
      'Frontend Development': 'Frontend',
      'Backend Development': 'Backend',
      'Mobile Development': 'Mobile',
      'Design': 'Dizayn',
      'Data Science': 'Ma\'lumotlar tahlili',
      'DevOps': 'DevOps'
    }
    return categoryMap[categoryName] || categoryName
  }

  // Generate random colors for courses
  const getRandomColor = (index) => {
    const colors = [
      "bg-gradient-to-br from-red-500 via-red-600 to-pink-600",
      "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600",
      "bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600",
      "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600",
      "bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500",
      "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
    ]
    return colors[index % colors.length]
  }

  // Get random icons
  const getRandomIcons = (categoryName) => {
    const iconMap = {
      'Frontend Development': ["⚛️", "🚀"],
      'Backend Development': ["🐘", "🔥"],
      'Mobile Development': ["📱", "🎯"],
      'Design': ["🎨", "✨"],
      'Data Science': ["📊", "🤖"],
      'DevOps': ["⚙️", "🔧"]
    }
    return iconMap[categoryName] || ["💻", "📚"]
  }

  const tabs = [
    "Barcha kurslar",
    "Backend",
    "Frontend", 
    "Mobile",
    "Dizayn",
    "Ma'lumotlar tahlili",
    "DevOps"
  ]

  // Filter courses based on active tab
  const filteredCourses = activeTab === "Barcha kurslar" 
    ? courses 
    : courses.filter(course => getCategoryInUzbek(course.category.name) === activeTab)

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className={`text-lg ${qoraTema ? "text-white" : "text-gray-900"}`}>Kurslar yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
        <div className="text-center">
          <p className={`text-lg mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Qayta urinish
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${qoraTema ? "bg-white" : "bg-gray-900"}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setQoraTema(!qoraTema)}
        className={`fixed top-20 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          qoraTema ? "bg-yellow-300 text-gray-900 hover:bg-yellow-200" : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        {qoraTema ? "☀️" : "🌙"}
      </button>

      {/* Header/Navbar - Keep your existing header code */}
      <header
        className={`shadow-sm px-4 lg:px-8 py-4 fixed top-0 w-full z-50 transition-colors duration-300 ${
          qoraTema ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Book-Time</span>
            <div className="text-xs bg-blue-600 text-white px-1 rounded">®</div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              Asosiy
            </Link>
            <Link 
              to="/Kurslar"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-500" : "text-gray-700"}`}
            >
              Kurslar
            </Link>
            <Link 
              to="/BizHaqimizda"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              Biz haqimizda
            </Link>
            <Link 
              to="/Boglanish"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              Boglanish
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className={`px-4 py-2 hover:animate-pulse transition-colors bg-blue-500 rounded-2xl ${
                qoraTema ? "text-gray-300" : "text-gray-50"
              }`}
            >
              Login
            </Link>
            <Link
              to="/Register"
              className={`px-4 py-2 hover:animate-pulse transition-colors bg-blue-500 rounded-2xl ${
                qoraTema ? "text-gray-300" : "text-gray-50"
              }`}
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section className={`pt-24 py-20 transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${qoraTema ? "text-white" : "text-gray-900"}`}>
              Ommabop <span className="text-blue-600">Kurslar</span>
            </h2>
            <p className={`max-w-3xl mx-auto text-lg ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
              Kasbga yo'naltirilgan amaliy mashg'ulotlar yordamida siz o'z ustasiga yaxshilab qo'ying. Professional
              mentorlar tomonidan tayyorlangan zamonaviy dasturlar.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : qoraTema
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`group rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  qoraTema ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                }`}
              >
                {/* Course Header with Gradient */}
                <div className={`${getRandomColor(index)} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {getLevelText(course.level)}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                        <div className="flex items-center gap-1 text-sm opacity-90">
                          <span>⭐</span>
                          <span>4.8</span>
                          <span>({course._count.purchased}+ o'quvchi)</span>
                        </div>
                      </div>
                      <div className="flex gap-2 text-3xl">
                        {getRandomIcons(course.category.name).map((icon, i) => (
                          <span key={i} className="opacity-80 hover:opacity-100 transition-opacity">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl overflow-hidden ${
                        qoraTema ? "bg-gray-700" : "bg-gray-100"
                      }`}
                    >
                      {course.mentor.image ? (
                        <img 
                          src={`https://fn3.fixoo.uz/uploads/${course.mentor.image}`} 
                          alt={course.mentor.fullName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        "👨‍🏫"
                      )}
                    </div>
                    <div>
                      <span className={`text-sm font-medium block ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
                        {course.mentor.fullName}
                      </span>
                      <span className={`text-xs ${qoraTema ? "text-gray-500" : "text-gray-500"}`}>Mentor</span>
                    </div>
                  </div>

                  {/* Course Description */}
                  <div className="mb-6">
                    <p className={`text-sm ${qoraTema ? "text-gray-400" : "text-gray-600"}`}>
                      {course.about}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      qoraTema ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                    }`}>
                      <span>📂</span>
                      {getCategoryInUzbek(course.category.name)}
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className={`text-3xl font-bold ${qoraTema ? "text-white" : "text-gray-900"}`}>
                        ${course.price}
                      </div>
                    </div>
                    {course.published && (
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          <span>✅</span>
                          <span>Mavjud</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Kursga yozilish
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className={`text-lg ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                Hozircha bu kategoriyada kurslar mavjud emas
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="flex items-center gap-3">
                Ko'proq ko'rish
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
            <p className={`mt-4 text-sm ${qoraTema ? "text-gray-400" : "text-gray-500"}`}>
              Barcha kurslar bilan tanishish uchun
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Keep your existing footer code */}
      <footer
        className={`py-12 border-t transition-colors duration-300 ${
          qoraTema ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-600">Book-Time</span>
            <div className="text-xs bg-blue-600 text-white px-1 rounded">®</div>
          </div>
          <p className={`mb-6 ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>Biz bilan muvaffaqiyatga erishling</p>
          <p className={`text-sm mb-6 ${qoraTema ? "text-gray-400" : "text-gray-500"}`}>
            Barcha huquqlar himoyalangan. mentorlarimiz tomonidan tayyorlangan
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Bog'lanish
            </button>
          </div>

          <div className={`text-xs ${qoraTema ? "text-gray-500" : "text-gray-400"}`}>
            <p>© Book-Time 2025. Barcha huquqlar himoyalangan.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Maxfiylik
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Asosiy
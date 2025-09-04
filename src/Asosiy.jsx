"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Asosiy = () => {
  const [activeTab, setActiveTab] = useState("Barcha kurslar")
  const [qoraTema, setQoraTema] = useState(true)
  const [showVideoModal, setShowVideoModal] = useState(false)
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

  // Get category name in Uzbek
  const getCategoryInUzbek = (categoryName) => {
    const categoryMap = {
      'Frontend Development': 'Frontend',
      'Backend Development': 'Backend',
      'Mobile Development': 'Mobile',
      'Design': 'Dizayn',
      'Data Science': 'IT-Boshqaruv',
      'DevOps': 'Foundation'
    }
    return categoryMap[categoryName] || categoryName
  }

  // Generate colors for courses
  const getColor = (index) => {
    const colors = [
      "bg-gradient-to-br from-red-500 to-red-600",
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "bg-gradient-to-br from-green-500 to-green-600",
      "bg-gradient-to-br from-purple-500 to-purple-600",
      "bg-gradient-to-br from-cyan-500 to-cyan-600",
      "bg-gradient-to-br from-pink-500 to-pink-600",
    ]
    return colors[index % colors.length]
  }

  // Get icons for categories
  const getIcon = (categoryName) => {
    const iconMap = {
      'Frontend Development': "⚛️",
      'Backend Development': "🐘",
      'Mobile Development': "📱",
      'Design': "🎨",
      'Data Science': "📊",
      'DevOps': "⚙️"
    }
    return iconMap[categoryName] || "💻"
  }

  const mentors = [
    { name: "Abdulla Ergashev", image: "./img/output.mp4" },
    { name: "Olmas Sodiqov", image: "./img/output.mp4" },
    { name: "Javohir Toshev", image: "./img/output.mp4" },
    { name: "Dilshod Karimov", image: "./img/output.mp4" },
  ]

  const reviews = [
    {
      name: "sardorbek jonibekov",
      rating: 5,
      text: "Juda zor kurslar, mentorlar professional",
      avatar: "./img/user.png",
    },
    {
      name: "Jasurbek Yoldoshev",
      rating: 5,
      text: "Kurs davomida juda kop narsalarni organdim",
      avatar: "./img/user.png",
    },
    {
      name: "Nodirabegim Halimova",
      rating: 5,
      text: "Eng yaxshi oquv markaz, tavsiya qilaman",
      avatar: "./img/user.png",
    },
  ]

  const tabs = ["Barcha kurslar", "Backend", "Frontend", "Foundation", "Mobile", "IT-Boshqaruv", "Dizayn"]

  // Filter courses based on active tab
  const filteredCourses = activeTab === "Barcha kurslar" 
    ? courses.slice(0, 4) // Show only first 4 courses for main page
    : courses.filter(course => getCategoryInUzbek(course.category.name) === activeTab).slice(0, 4)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${qoraTema ? "bg-white" : "bg-gray-900"}`}>
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Book-Time Video</h3>
              <button onClick={() => setShowVideoModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                ×
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="130%"
                src="https://www.youtube.com/embed/Wsu6fP6aIGI?autoplay=1"
                title="Book-Time Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setQoraTema(!qoraTema)}
        className={`fixed top-20 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          qoraTema ? "bg-yellow-300 text-gray-900 hover:bg-yellow-200" : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        {qoraTema ? "☀️" : "🌙"}
      </button>

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
            <Link to="/" className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-500" : "text-gray-700"}`}>
              Asosiy
            </Link>
            <Link to="/Kurslar" className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
              Kurslar
            </Link>
            <Link to="/BizHaqimizda" className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
              Biz haqimizda
            </Link>
            <Link to="/Boglanish" className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
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

      {/* Hero Section */}
      <section
        className={`pt-24 pb-16 transition-colors duration-300 ${
          qoraTema ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 to-indigo-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className={`text-4xl lg:text-5xl font-bold leading-tight ${qoraTema ? "text-white" : "text-gray-900"}`}>
                Kelajak <span className="text-blue-600">kasblarini</span> biz bilan o'rganing!
              </h1>
              <p className={`text-lg ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                Dasturlash sohasini va boshqa yo'nalishlarga oid qiziq.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Kurslar bilan tanishish
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img src="./img/home.png" alt="Hero illustration" className="w-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>Ommabop kurslar</h2>
            <p className={`max-w-2xl mx-auto ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
              Kasbga yo'naltirilgan amaliy mashg'ulotlar yordamida siz o'z ustasiga yaxshilab qo'ying.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : qoraTema
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className={`text-lg ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>Kurslar yuklanmoqda...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className={`text-lg mb-4 ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Qayta urinish
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {filteredCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                      qoraTema ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className={`${getColor(index)} p-6 text-white relative`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-3">
                            {getLevelText(course.level)}
                          </div>
                          <h3 className="text-2xl font-bold">{course.name}</h3>
                          <div className="flex items-center gap-1 text-sm mt-2 opacity-90">
                            <span>⭐</span>
                            <span>4.8</span>
                            <span>({course._count.purchased}+ o'quvchi)</span>
                          </div>
                        </div>
                        <div className="text-4xl opacity-80">{getIcon(course.category.name)}</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${
                          qoraTema ? "bg-gray-700" : "bg-gray-200"
                        }`}>
                          {course.mentor.image ? (
                            <img 
                              src={`https://fn3.fixoo.uz/uploads/${course.mentor.image}`} 
                              alt={course.mentor.fullName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            "👨"
                          )}
                        </div>
                        <span className={`text-sm font-medium ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
                          {course.mentor.fullName}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className={`text-sm ${qoraTema ? "text-gray-400" : "text-gray-600"}`}>
                          {course.about}
                        </p>
                      </div>

                      <div className="mb-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                          qoraTema ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                        }`}>
                          <span>📂</span>
                          {getCategoryInUzbek(course.category.name)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <div className={`text-2xl font-bold ${qoraTema ? "text-white" : "text-gray-900"}`}>
                            ${course.price}
                          </div>
                        </div>
                        {course.published && (
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            <span>✅</span>
                            <span>Mavjud</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className={`text-lg ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                    Hozircha bu kategoriyada kurslar mavjud emas
                  </p>
                </div>
              )}
            </>
          )}

          <div className="text-center mt-12">
            <Link to="/Kurslar">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Ko'proq ko'rish
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>Bizga qo'shiling</h2>
            <p className={`max-w-2xl mx-auto ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
              Bizning safarimizga qo'shiling o'quvchilarni baki yetishtirishga bo'lish mentor sizlardu ham qo'shilang
              mumkin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className={`text-xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>O'quvchimisiz?</h3>
              <p className={`mb-6 ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                Agarda o'quvchi bo'lsangiz bizning valeolog dasturlash fakulteti mentorimizdan shogird bo'ling
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                O'quvchi
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">👨‍🏫</div>
              <h3 className={`text-xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>Mentorimisiz?</h3>
              <p className={`mb-6 ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                Bizning malakali jamiyatimizga qo'shilib, o'z tajribangizni bo'lishish bilan sizga qidirb platform
                orqali shaxsing
              </p>
              <button
                className={`px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors ${
                  qoraTema ? "hover:text-white" : ""
                }`}
              >
                Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img src="./img/3d-img.webp" alt="AI Brain" className="w-70 h-69" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Istalgan nuqtadan onlayn o'qish imkoniyati</h2>
          <p className="text-xl mb-8 opacity-90">Har qaysi joy imkoniyatini istalgan joydan qila</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Biz bilan rishib
          </button>
        </div>
      </section>

      {/* Mentors Section */}
      <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>
              Tajribali Mentorlar
            </h2>
            <p className={qoraTema ? "text-gray-300" : "text-gray-600"}>
              Barcha yo'nalishlar bo'yicha tajribali mentorlar tomonidan tayyorlangan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <video
                  src="./img/output.mp4"
                  className="w-80 h-80 object-cover mx-auto group-hover:scale-110 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                  <div className="p-4 text-center">
                    <h3 className="text-white text-lg font-bold">{mentor.name}</h3>
                    <p className="text-gray-300 text-sm">Dasturchi, Matematik</p>

                    <div className="flex justify-center gap-4 mt-3 text-white">
                      <a href="#"><i className="fab fa-telegram text-xl hover:text-blue-400"></i></a>
                      <a href="#"><i className="fab fa-instagram text-xl hover:text-pink-400"></i></a>
                      <a href="#"><i className="fab fa-facebook text-xl hover:text-blue-500"></i></a>
                      <a href="#"><i className="fab fa-linkedin text-xl hover:text-blue-400"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>Izohlar</h2>
            <p className={qoraTema ? "text-gray-300" : "text-gray-600"}>
              O'quvchilarimiz tomonidan qoldirilgan izohlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  qoraTema ? "bg-gray-700" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar || "./img/user.png"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className={`font-medium ${qoraTema ? "text-white" : "text-gray-800"}`}>{review.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={`text-sm ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <button
              onClick={() => setShowVideoModal(true)}
              className={`px-4 py-2 border rounded-lg transition-colors ${
                qoraTema
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Play Video
            </button>
            <Link to="/Boglanish">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Bog'lanish
              </button>
            </Link>
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
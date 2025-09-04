"use client"

import { useState, useEffect } from "react"
import {
  Home,
  BookOpen,
  MessageSquare,
  LogOut,
  Settings,
  Bell,
  Moon,
  User,
  Plus,
  Edit,
  Trash2,
  Users,
  Clock,
} from "lucide-react"

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState("asosiy")
  const [showAddCourse, setShowAddCourse] = useState(false)
  const [editingCourse, setEditingCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [courses, setCourses] = useState([])

  const [newCourse, setNewCourse] = useState({
    name: "",
    about: "",
    price: "",
    level: "BEGINNER",
  })

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://fn3.fixoo.uz/courses")
        const data = await response.json()

        if (data.success) {
          const transformedCourses = data.data.map((course) => ({
            id: course.id,
            title: course.name,
            description: course.about,
            price: `$${course.price}`,
            level: course.level,
            status: course.published ? "Faol" : "Nofaol",
            students: course._count.purchased,
            category: course.category.name,
            mentor: course.mentor.fullName,
            image: course.banner
              ? `https://fn3.fixoo.uz/uploads/${course.banner}`
              : "/placeholder.svg?height=200&width=300",
            createdAt: course.createdAt,
          }))
          setCourses(transformedCourses)
        } else {
          setError("Ma'lumotlarni yuklashda xatolik yuz berdi")
        }
      } catch (error) {
        console.error("API xatoligi:", error)
        setError("Server bilan bog'lanishda xatolik yuz berdi")
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  const CustomButton = ({ children, variant = "default", size = "default", className = "", onClick, ...props }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    }

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }

  const handleAddCourse = () => {
    if (newCourse.name && newCourse.about) {
      const course = {
        id: Date.now(),
        title: newCourse.name,
        description: newCourse.about,
        price: `$${newCourse.price}`,
        level: newCourse.level,
        students: 0,
        status: "Faol",
        category: "Yangi kategoriya",
        mentor: "Davlat Berdinazarov",
        image: "/placeholder.svg?height=200&width=300",
      }
      setCourses([...courses, course])
      setNewCourse({ name: "", about: "", price: "", level: "BEGINNER" })
      setShowAddCourse(false)
    }
  }

  const handleEditCourse = (course) => {
    setEditingCourse(course)
    setNewCourse({
      name: course.title,
      about: course.description,
      price: course.price.replace("$", ""),
      level: course.level || "BEGINNER",
    })
    setShowAddCourse(true)
  }

  const handleUpdateCourse = () => {
    if (editingCourse && newCourse.name && newCourse.about) {
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id
            ? {
                ...course,
                title: newCourse.name,
                description: newCourse.about,
                price: `$${newCourse.price}`,
                level: newCourse.level,
              }
            : course,
        ),
      )
      setEditingCourse(null)
      setNewCourse({ name: "", about: "", price: "", level: "BEGINNER" })
      setShowAddCourse(false)
    }
  }

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId))
  }

  const menuItems = [
    { id: "asosiy", label: "Asosiy", icon: Home },
    { id: "kurslar", label: "Kurslar", icon: BookOpen },
    { id: "izohlar", label: "Izohlar", icon: MessageSquare },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IT</span>
            </div>
            <span className="text-xl font-bold">Live</span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">BOSHQARUV PANELI</h3>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <CustomButton
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </CustomButton>
                )
              })}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <CustomButton
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <LogOut className="mr-3 h-4 w-4" />
            Chiqish
          </CustomButton>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Mentor</h1>
              <p className="text-gray-400 text-sm">Boshqaruv paneli</p>
            </div>

            <div className="flex items-center space-x-4">
              <CustomButton variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
              </CustomButton>
              <CustomButton variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Settings className="h-5 w-5" />
              </CustomButton>
              <CustomButton variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Moon className="h-5 w-5" />
              </CustomButton>

              <div className="flex items-center space-x-3 pl-4 border-l border-gray-700">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Davlat Berdinazarov</p>
                  <p className="text-xs text-gray-400">MENTOR</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-900 overflow-y-auto">
          {activeTab === "asosiy" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Asosiy</h2>
                <p className="text-gray-400">Boshqaruv paneli</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400">Jami talabalar</h3>
                  <p className="text-2xl font-bold text-white mt-2">1,234</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400">Faol kurslar</h3>
                  <p className="text-2xl font-bold text-white mt-2">12</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400">Tugallangan darslar</h3>
                  <p className="text-2xl font-bold text-white mt-2">89</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400">Reyting</h3>
                  <p className="text-2xl font-bold text-white mt-2">4.8</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">So'nggi faoliyat</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Yangi talaba ro'yxatdan o'tdi</span>
                    <span className="text-gray-400 text-sm">2 soat oldin</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Kurs yakunlandi</span>
                    <span className="text-gray-400 text-sm">5 soat oldin</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Yangi izoh qoldirildi</span>
                    <span className="text-gray-400 text-sm">1 kun oldin</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "kurslar" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Kurslar</h2>
                  <p className="text-gray-400">Kurslaringizni boshqaring va yangilarini qo'shing</p>
                </div>
                <CustomButton onClick={() => setShowAddCourse(true)} className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Yangi kurs qo'shish
                </CustomButton>
              </div>

              {showAddCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 w-full max-w-md">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {editingCourse ? "Kursni tahrirlash" : "Yangi kurs qo'shish"}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Kurs nomi</label>
                        <input
                          type="text"
                          value={newCourse.name}
                          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Kurs nomini kiriting"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Tavsif</label>
                        <textarea
                          value={newCourse.about}
                          onChange={(e) => setNewCourse({ ...newCourse, about: e.target.value })}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="3"
                          placeholder="Kurs haqida qisqacha ma'lumot"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Daraja</label>
                          <select
                            value={newCourse.level}
                            onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="BEGINNER">Boshlang'ich</option>
                            <option value="INTERMEDIATE">O'rta</option>
                            <option value="ADVANCED">Ilg'or</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Narxi ($)</label>
                          <input
                            type="number"
                            value={newCourse.price}
                            onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="49.99"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 mt-6">
                      <CustomButton
                        variant="ghost"
                        onClick={() => {
                          setShowAddCourse(false)
                          setEditingCourse(null)
                          setNewCourse({ name: "", about: "", price: "", level: "BEGINNER" })
                        }}
                      >
                        Bekor qilish
                      </CustomButton>
                      <CustomButton
                        onClick={editingCourse ? handleUpdateCourse : handleAddCourse}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {editingCourse ? "Yangilash" : "Qo'shish"}
                      </CustomButton>
                    </div>
                  </div>
                </div>
              )}

              {loading && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-400">Kurslar yuklanmoqda...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 text-center">
                  <p className="text-red-400">{error}</p>
                  <CustomButton onClick={() => window.location.reload()} className="mt-2 bg-red-600 hover:bg-red-700">
                    Qayta urinish
                  </CustomButton>
                </div>
              )}

              {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              course.status === "Faol" ? "bg-green-600 text-green-100" : "bg-gray-600 text-gray-100"
                            }`}
                          >
                            {course.status}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-300">
                              <Users className="h-4 w-4 mr-1" />
                              {course.students} talaba
                            </div>
                            <div className="flex items-center text-gray-300">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {course.level}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-300">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.category}
                            </div>
                            <div className="flex items-center text-gray-300">
                              <User className="h-4 w-4 mr-1" />
                              {course.mentor}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 font-semibold">{course.price}</span>
                          <div className="flex space-x-2">
                            <CustomButton
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEditCourse(course)}
                              className="text-gray-400 hover:text-white"
                            >
                              <Edit className="h-4 w-4" />
                            </CustomButton>
                            <CustomButton
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeleteCourse(course.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="h-4 w-4" />
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && !error && courses.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-400 mb-2">Hozircha kurslar yo'q</h3>
                  <p className="text-gray-500 mb-4">Birinchi kursingizni qo'shish uchun yuqoridagi tugmani bosing</p>
                  <CustomButton onClick={() => setShowAddCourse(true)} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Yangi kurs qo'shish
                  </CustomButton>
                </div>
              )}
            </div>
          )}

          {activeTab === "izohlar" && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Izohlar</h2>
              <p className="text-gray-400">Talabalar izohlari bu yerda ko'rsatiladi</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

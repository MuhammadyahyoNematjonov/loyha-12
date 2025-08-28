"use client"

import { useState } from "react"
import { Link } from "react-router-dom"


const Button = ({ children, className = "", type = "button", onClick, disabled, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
        disabled
          ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed scale-100 hover:scale-100"
          : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-lg hover:shadow-xl"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Input = ({ className = "", type = "text", ...props }) => {
  return (
    <input
      type={type}
      className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:scale-105 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${className}`}
      {...props}
    />
  )
}

const Label = ({ children, className = "", htmlFor, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}

const HomeButton = () => {
  return (
    <button
      onClick={() => (window.location.href = "/")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      Bosh sahifa
    </button>
  )
}

const Register = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Ism kiritish majburiy"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email kiritish majburiy"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email formati noto'g'ri"
    }

    if (!formData.password) {
      newErrors.password = "Parol kiritish majburiy"
    } else if (formData.password.length < 6) {
      newErrors.password = "Parol kamida 6 ta belgidan iborat bo'lishi kerak"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parollar mos kelmaydi"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Ro'yxatdan o'tish muvaffaqiyatli!")
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    } catch (error) {
      alert("Xatolik yuz berdi!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 flex items-center justify-center p-4 ${
        isDarkMode
          ? "dark bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center animate-fade-in">
        <HomeButton />
        <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:shadow-3xl animate-fade-in-up">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ro'yxatdan o'tish
          </h1>
          <p className="text-gray-600 dark:text-gray-400 animate-fade-in-delay">Yangi hisob yarating</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            <Label htmlFor="name">To'liq ism</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`${errors.name ? "border-red-500 animate-shake" : ""}`}
              placeholder="Ismingizni kiriting"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name}</p>}
          </div>

          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <Label htmlFor="email">Email manzil</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${errors.email ? "border-red-500 animate-shake" : ""}`}
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>}
          </div>

          <div className="animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <Label htmlFor="password">Parol</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`${errors.password ? "border-red-500 animate-shake" : ""}`}
              placeholder="Parolingizni kiriting"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.password}</p>}
          </div>

          <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
            <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`${errors.confirmPassword ? "border-red-500 animate-shake" : ""}`}
              placeholder="Parolni qayta kiriting"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
            <Button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden">
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Yuklanmoqda...
                </span>
              ) : (
                "Ro'yxatdan o'tish"
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center animate-fade-in-delay-2">
          <p className="text-gray-600 dark:text-gray-400">
            Allaqachon hisobingiz bormi?{" "}
           <Link to="/login">
             <a
              href=""
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 hover:underline"
            >
              Kirish
            </a>
           </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.5s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.5s ease-out 0.6s both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out both;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out both;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Register

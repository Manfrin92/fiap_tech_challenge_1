"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  placeholder?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  className?: string
  borderColor?: "blue" | "green" | "teal" | "red" | "purple"
}

export default function CustomSelect({
  options,
  placeholder = "Selecione uma opção",
  onValueChange,
  defaultValue,
  className = "",
  borderColor = "teal",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue || "")
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === selectedValue)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
    onValueChange?.(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setIsOpen(!isOpen)
    } else if (event.key === "Escape") {
      setIsOpen(false)
    }
  }

  const getButtonClasses = () => {
    const baseClasses =
      "w-full h-16 px-6 bg-white border-2 rounded-xl text-gray-700 text-lg font-medium focus:ring-2 focus:outline-none transition-colors flex items-center justify-between"

    if (borderColor === "green") {
      return `${baseClasses} border-[var(--color-green)] hover:border-[var(--color-green)] focus:border-[var(--color-green)] focus:ring-[var(--color-green)]`
    }
    if (borderColor === "blue") {
      return `${baseClasses} border-[var(--color-green-dark)] hover:border-[var(--color-green-dark)] focus:border-[var(--color-green-dark)] focus:ring-[var(--color-green-dark)]`
    }
    // default teal
    return `${baseClasses} border-teal-600 hover:border-teal-700 focus:border-teal-700 focus:ring-teal-200`
  }

  const getDropdownClasses = () => {
    const baseClasses =
      "absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-xl shadow-lg z-50 overflow-hidden"

    if (borderColor === "green") {
      return `${baseClasses} border-[var(--color-green)]`
    }
    if (borderColor === "blue") {
      return `${baseClasses} border-[var(--color-green-dark)]`
    }
    // default teal
    return `${baseClasses} border-[var(--color-green-dark)]`
  }

  const getIconColor = () => {
    if (borderColor === "green") return "text-[var(--color-green)]"
    if (borderColor === "blue") return "text-[var(--color-green-dark)]"
    return "text-[var(--color-green-dark)]"
  }

  const getHoverClasses = () => {
    if (borderColor === "green") return "hover:bg-[var(--color-green-light)] hover:font-bold hover:text-[var(--color-gray-dark)]"
    if (borderColor === "blue") return "hover:bg-[var(--color-blue-light)] hover:font-bold hover:text-[var(--color-gray-dark)]"
    return "hover:bg-[var(--color-blue-light)] focus:bg-[var(--color-green-dark)]"
  }

  return (
    <div className={`relative w-full ${className}`} ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={getButtonClasses()}
      >
        <span className={clsx("text-base", selectedOption ? "text-gray-700" : "text-gray-500")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-5 w-5 ${getIconColor()} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className={getDropdownClasses()}>
          <ul role="listbox" className="py-1">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={`w-full text-left px-6 py-3 text-base ${getHoverClasses()} focus:outline-none transition-colors`}
                  onClick={() => handleSelect(option.value)}
                  role="option"
                  aria-selected={selectedValue === option.value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

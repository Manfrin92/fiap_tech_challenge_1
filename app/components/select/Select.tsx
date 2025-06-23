"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { tv } from "tailwind-variants"

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
  borderColor?: "blue" | "green"
}

const selectButtonVariants = tv({
  base: "w-full h-16 px-6 bg-white border-2 rounded-xl text-gray-700 text-lg font-medium focus:ring-2 focus:outline-none transition-colors flex items-center justify-between",
  variants: {
    borderColor: {
      green: "border-[var(--color-green)] hover:border-[var(--color-green)] focus:border-[var(--color-green)] focus:ring-[var(--color-green)]",
      blue: "border-[var(--color-green-dark)] hover:border-[var(--color-green-dark)] focus:border-[var(--color-green-dark)] focus:ring-[var(--color-green-dark)]",
    },
  },
  defaultVariants: {
    borderColor: "blue",
  },
})

const selectDropdownVariants = tv({
  base: "absolute top-full left-0 right-0 mt-1 bg-white border-2 rounded-xl shadow-lg z-50 overflow-hidden",
  variants: {
    borderColor: {
      green: "border-[var(--color-green)]",
      blue: "border-[var(--color-green-dark)]",
    },
  },
  defaultVariants: {
    borderColor: "blue",
  },
})

const selectIconVariants = tv({
  base: "h-5 w-5 transition-transform duration-200",
  variants: {
    borderColor: {
      green: "text-[var(--color-green)]",
      blue: "text-[var(--color-green-dark)]",
    },
    open: {
      true: "rotate-180",
      false: "",
    },
  },
  defaultVariants: {
    borderColor: "blue",
    open: false,
  },
})

const selectOptionVariants = tv({
  base: "w-full text-left px-6 py-3 text-base focus:outline-none transition-colors",
  variants: {
    borderColor: {
      green: "hover:bg-[var(--color-green-light)] hover:font-bold hover:text-[var(--color-gray-dark)]",
      blue: "hover:bg-[var(--color-blue-light)] hover:font-bold hover:text-[var(--color-gray-dark)]",
    },
  },
  defaultVariants: {
    borderColor: "blue",
  },
})

export default function CustomSelect({
  options,
  placeholder = "Selecione uma opção",
  onValueChange,
  defaultValue,
  className = "",
  borderColor = "blue",
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

  return (
    <div className={`relative w-full ${className}`} ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={selectButtonVariants({ borderColor })}
      >
        <span className={`text-base ${selectedOption ? "text-gray-700" : "text-gray-500"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={selectIconVariants({ borderColor, open: isOpen })}
        />
      </button>

      {isOpen && (
        <div className={selectDropdownVariants({ borderColor })}>
          <ul role="listbox" className="py-1">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={selectOptionVariants({ borderColor })}
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

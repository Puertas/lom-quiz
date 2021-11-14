import React from 'react'

import { IconPros } from '.'

export const Cross = ({ size = '24' }: IconPros) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="feather feather-x"
    viewBox="0 0 24 24"
  >
    <path d="M18 6L6 18"></path>
    <path d="M6 6L18 18"></path>
  </svg>
)

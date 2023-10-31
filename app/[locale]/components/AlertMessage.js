"use client";
import React from 'react'

const AlertMessage = ({message, lang}) => {
    
    return (
        <div>{message}- {lang}</div>
    )
}

export default AlertMessage
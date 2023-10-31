import React from 'react';
import Link from 'next-intl/link';


const LanguageSelection = () => {
    return (
        <div>
            <Link href="/" locale="en">English</Link>
            {" "} | {" "}
            <Link href="/" locale="hi">हिंदी</Link>
            <br/><br/>
        </div>
    )
}

export default LanguageSelection
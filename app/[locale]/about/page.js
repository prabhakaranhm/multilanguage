import React from 'react'
import {useTranslations} from 'next-intl';

const About = () => {
    const t = useTranslations('Index');
  return (
    <div>
        <h3>{ t("About.title") }</h3><br/>
        <p>{ t("About.content") }</p>
    </div>
  )
}

export default About
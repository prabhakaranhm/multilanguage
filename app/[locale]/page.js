import {useTranslations} from 'next-intl';
import AlertMessage from './components/AlertMessage';


export default function Home(props) {
  const t = useTranslations('Index');
  const alerts = useTranslations('Alerts');
  return (
    <div>
      <div>
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
        <br/>
      </div>
      <div>
        <AlertMessage message={alerts('alertMessage')} lang={props.params.locale}/>
      </div>
    </div>
  )
}

import { useTranslation } from 'next-i18next';

const Roadmap = () => {
    const { t } = useTranslation()
    
    return (
        <div className='uk-section uk-margin-remove-top' id='Roadmap'>
            <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical'>
                <h3 className='uk-hidden@m uk-heading-small uk-text-bold uk-text-uppercase'>{t("header.Roadmap")}</h3>
                <h3 className='uk-visible@m uk-heading-medium uk-text-bold uk-text-uppercase'>{t("header.Roadmap")}</h3>
                <div className="uk-timeline">
                    {
                        t("Roadmap", { returnObjects: true }).map((roadmap, index) => {
                            return (
                                <div className="uk-timeline-item" key={index}>
                                    <div className="uk-timeline-icon">
                                        <span className="uk-badge"></span>
                                    </div>
                                    <div className="uk-timeline-content">
                                        <div className={`uk-card uk-margin-medium-bottom uk-overflow-auto ${roadmap.color}`}>
                                            <div className="uk-card-header">
                                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                                    <h3 className="uk-card-title uk-text-bolder uk-text-white-h3"><time>{roadmap.date}</time></h3>
                                                </div>
                                                <hr className={roadmap.colorHr} />
                                            </div>
                                            <div className="uk-card-body uk-padding-remove-vertical uk-margin-remove-top uk-margin-bottom">
                                                <p className="uk-text-white">{roadmap.description}
                                                </p>
                                            </div>
                                        </div>
                                        {
                                            roadmap.message != undefined &&
                                            <p className='uk-icon-green'>
                                                <span className="uk-margin-small-right uk-icon-green" data-uk-icon="icon: warning; ratio: 1.5"></span>{roadmap.message}
                                            </p>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Roadmap;
import React, {Component} from 'react'
import {notification, Typography} from 'antd'
import connect from "react-redux/es/connect/connect"
import {selectLocale} from "../../../store/selectors/common"
import { localization } from '../../../constants/locale'
import './AboutSection.css'
import handImage from '../../../static/img/hand3.png'
import googlePlayBadge from '../../../static/img/google-play-badge.svg'
import downloadBadge from '../../../static/img/download-badge.png'


const {Title, Text} = Typography

class AboutSection extends Component {

    openNotification = () => {
        notification.info({
            message: 'Уже скоро!',
            placement: 'topLeft'
        })
    }

    render() {
        const text = localization[this.props.locale].aboutSectionText
        return (
            <div className="aboutSectionMainContainer">
                <div>
                    <Title class="aboutSectionTitle">{text.aboutSectionTitle0}<span
                        className="aboutTitleBold">{text.aboutSectionTitle1}</span>{text.aboutSectionTitle2}</Title>
                </div>
                <div className="descriptionMainContainer">
                    <div className="handContainer">
                        <img id="handImage" src={handImage}/>
                    </div>
                    <div className="appDescriptionContainer">
                        <div>
                            <Title level={3} style={{color: "white", margin: "50px 0"}}>{text.appDescriptionTitle}</Title>
                            <div id="appDescriptionText">
                                <Text style={{color: "white", fontSize: "1.2rem"}} >{text.appDescriptionText}</Text>
                            </div>
                            <div id="storeBadgesContainer">
                                <img src={googlePlayBadge} onClick={this.openNotification}/>
                                <img src={downloadBadge} onClick={this.openNotification}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    locale: selectLocale(state)
})

export default connect(mapStateToProps, null)(AboutSection)
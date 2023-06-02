import IMAGEPROFILE from '../utils/images/jhonsdev.png';
import LINKEDIN from '../utils/images/linkedin.svg';
import TWITTER from '../utils/images/twitter.svg';
import GITHUB from '../utils/images/github.svg';

export default function Header() {

    const listSkills = [
        {
            id:1,
            name: 'HTML',
            img: 'html.svg'
        },{
            id:2,
            name: 'CSS',
            img: 'css.svg'
        },{
            id:3,
            name: 'ReactJS',
            img: 'react.svg'
        },{
            id:4,
            name: 'JavaScript',
            img: 'javascript.svg'
        },{
            id:5,
            name: 'Node.js',
            img: 'nodejs.svg'
        },{
            id:6,
            name: 'TypeScript',
            img: 'typescript.svg'
        },{
            id:7,
            name: 'SASS',
            img: 'sass.svg'
        },{
            id:8,
            name: 'Java',
            img: 'java.svg'
        },{
            id:9,
            name: 'PHP',
            img: 'php.svg'
        },{
            id:10,
            name: 'Kotlin',
            img: 'kotlin.svg'
        },{
            id:11,
            name: 'Dart',
            img: 'dart.svg'
        },{
            id:12,
            name: 'ReactNative',
            img: 'reactnative.svg'
        },{
            id:13,
            name: 'VueJS',
            img: 'vue.svg'
        },{
            id:14,
            name: 'Tailwindcss',
            img: 'tailwindcss.svg'
        },{
            id:15,
            name: 'Bootstrap',
            img: 'bootstrap.svg'
        },{
            id:16,
            name: 'Jquery',
            img: 'jquery.svg'
        },{
            id:17,
            name: 'Laravel',
            img: 'laravel.svg'
        },{
            id:18,
            name: 'Flutter',
            img: 'flutter.svg'
        },{
            id:19,
            name: 'NextJS',
            img: 'nextjs.svg'
        },{
            id:20,
            name: 'Postman',
            img: 'postman.svg'
        },{
            id:21,
            name: 'Socket.io',
            img: 'socketio.svg'
        },{
            id:22,
            name: 'Vite',
            img: 'vitejs.svg'
        }
    ];
    return(
        <div className="headerapp">
            <div className="headerapp__content">
                <div className="headerapp__content__secc">
                    <div className='headerapp__content__secc__parraf'>
                        <p className="headerapp__content__secc--title">
                            Hi. I'm Jonathan <span className="cursor">|</span>
                        </p>
                        <h3 className="headerapp__content__secc--subtitle">
                            Web Developer / Mobile Developer
                        </h3>
                        <h5 className="headerapp__content__secc--parraf">
                            Information and Communication Technology Engineering
                        </h5>
                    </div>
                    <div className='headerapp__content__secc__img__socialmedia'>
                        <div className='headerapp__content__secc__img__socialmedia__slider'>
                            <div className='headerapp__content__secc__img__socialmedia__items__slider'>
                                <div className='headerapp__content__secc__img__socialmedia__items__slider__item'>
                                    {listSkills.map((inf,indx) => (
                                        <div key={indx} className='headerapp__content__secc__img__socialmedia__items__slider__item__card'>
                                            <img src={require('../utils/images/'+inf.img)} className='headerapp__content__secc__img__socialmedia__items--icon' alt="Logo Linkedin"/>
                                            <p className='headerapp__content__secc__img__socialmedia__items--lbl'>{inf.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerapp__content__secc__img">
                    <img className='headerapp__content__secc__img--img' src={IMAGEPROFILE} alt="jhonscm dev" />
                    <div className='headerapp__content__secc__img__socialmedia'>
                        <div className='headerapp__content__secc__img__socialmedia__items'>
                            <img className='headerapp__content__secc__img__socialmedia__items--icon' src={LINKEDIN} alt="Logo Linkedin"/>
                            <img className='headerapp__content__secc__img__socialmedia__items--icon' src={TWITTER} alt="Logo Twitter"/>
                            <img className='headerapp__content__secc__img__socialmedia__items--icon' src={GITHUB} alt="Logo Github"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
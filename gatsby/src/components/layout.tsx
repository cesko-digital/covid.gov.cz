import React from 'react';
import '../../assets/ds/scss/front.scss';
import { Helmet } from 'react-helmet';

interface Props {
  children?: any;
}

export default function Layout({ children }: Props) {
  return (
    <div className='body__wrapper'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>My Title</title>
        <html className='pvs-theme' />
      </Helmet>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='my-2'>{children}</div>
            <a
              href='https://portal.gov.cz/'
              target='_blank'
              rel='noreferrer'
              className='btn btn-primary mb-2'
            >
              Portál občana
            </a>
            <p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur varius porttitor dui, at aliquet quam. Curabitur
                ullamcorper mattis pretium. Duis semper auctor justo, eget
                fringilla ex gravida vitae. Nullam tincidunt ligula eu purus
                dignissim, eget ullamcorper ipsum rutrum. Nunc bibendum accumsan
                ligula, ut hendrerit ex elementum vel. Morbi nisi arcu, blandit
                ullamcorper massa id, dignissim ultrices tellus. Nam ligula
                urna, mattis nec tincidunt in, cursus quis augue. Aliquam
                porttitor volutpat diam, eget semper orci. Vestibulum mollis
                orci id eros bibendum, vitae laoreet enim sollicitudin.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Duis interdum ante at nisl suscipit, eget
                tempus erat mattis. Cras tempus eros leo, sed euismod nisl
                faucibus non. Morbi sodales sed magna at cursus. Ut ut lobortis
                risus, ac facilisis purus. Aliquam hendrerit dignissim sem,
                egestas venenatis nulla pharetra vel. Sed tristique ornare odio
                non aliquet. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Pellentesque ipsum
                justo, semper at diam non, gravida ultrices nisl. Quisque tempor
                in nibh quis aliquet. Aenean eleifend felis vel massa tempor, a
                condimentum justo sagittis. Fusce elementum augue urna.
                Vestibulum porta ante vel porta consectetur. Praesent nulla
                urna, tincidunt luctus risus ac, varius faucibus justo.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className='footer' role='contentinfo'>
        <div className='container'>
          <div className='footer__inner'>
            <div className='footer__links'>
              <div className='row'>
                <div className='col-12 col-sm-6 col-lg-3'>
                  <div className='footer__box pb-2 pb-lg-0'>
                    <h3>Užitečné odkazy</h3>
                    <p className='smaller-2'>
                      Další užitečné informace z&nbsp;různých oblastí výkonu
                      veřejné správy.
                    </p>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3'>
                  <div className='footer__box pb-2 pb-sm-4 pb-lg-0'>
                    <ul>
                      <li>
                        <a
                          href='https://www.hrad.cz/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Prezident ČR
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.vlada.cz/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Vláda ČR
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.psp.cz/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Poslanecká sněmovna ČR
                        </a>
                      </li>
                      <li>
                        <a
                          href='http://www.senat.cz/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Senát ČR
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.mojedatovaschranka.cz/sds/searchForm.do '
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Seznam datových schránek
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3'>
                  <div className='footer__box pb-4 pb-sm-0'>
                    <ul>
                      <li>
                        <a
                          href='http://www.smocr.cz/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Svaz měst a obcí ČR
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.vestnikverejnychzakazek.cz/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Veřejné zakázky
                        </a>
                      </li>
                      <li>
                        <a
                          href='http://www.mvcr.cz/sluzba/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Státní služba
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://rpp-ais.egon.gov.cz/gen/agendy-detail/'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Agendy Org. veř. moci
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.uradprace.cz'
                          className='external'
                          title='Externí odkaz - otevře se do nového okna'
                          target='_blank'
                        >
                          Úřad práce
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3'>
                  <div className='footer__box'>
                    <ul className='bigger'>
                      <li>
                        <a href='#odkazy/cr'>
                          Informace
                          <br /> o&nbsp;České republice
                        </a>
                      </li>
                      <li>
                        <a href='#odkazy/eu'>
                          Informace
                          <br /> o&nbsp;Evropské unii
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer__common'>
              <div className='row'>
                <div className='col-12 col-sm-6 col-lg-3'>
                  <div className='footer__box pb-3 pb-sm-0'>
                    <ul>
                      <li>
                        <a href='#'>Prohlášení o přístupnosti</a>
                      </li>
                      <li>
                        <a href='#'>Historie přístupů</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-12 col-sm-6 col-lg-3'>
                  <div className='footer__box pb-3 pb-lg-0'>
                    <ul>
                      <li>
                        <a href='#'>Kompletní seznam odkazů</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-lg-6'>
                  <div className='footer__box'>
                    <p className='footer__brand'>
                      2020&nbsp;© Ministerstvo vnitra • Informace jsou
                      poskytovány v&nbsp;souladu se zákonem
                      č.&nbsp;106/1999&nbsp;Sb., o&nbsp;svobodném přístupu
                      k&nbsp;informacím.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

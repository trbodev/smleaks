/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Tiles',
    id: 'unused-tiles',
  },
});

export default function UnusedTiles(page) {
  const [sidebar, toggleSidebar] = useState(isMobile ? { 'data-sidebar-hidden': 'hidden' } : {});
  return (
    <div>
      <Header {...page} />
      <div
        id="page-wrapper"
        className="dark-mode page-wrapper with-transitions with-navbar with-sidebar with-navbar-fixed-bottom with-custom-webkit-scrollbars with-custom-css-scrollbars"
        data-sidebar-type="overlayed-sm-and-down"
        {...sidebar}
      >
        <Navbar {...{
          toggleSidebar, sidebar,
        }}
        />
        <SidebarOverlay {...{
          toggleSidebar, sidebar,
        }}
        />
        <Sidebar {...page} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row row-eq-spacing-lg">
              <div className="col-lg-9">
                <div className="content">
                  <h1 className="content-title">Unused Tiles</h1>
                </div>
                <div className="card">
                  <a id="unused-tile-assest-icons" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725883257815050/90cea71c-a93b-44b8-8421-1195c691547c.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725940619640852/f6cf1aa1-ee0c-4904-ae8f-0701071940c6.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725879424876594/136ac970-c0dd-4f3f-b4e9-10ecfffaf612.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725888975306752/5081c5df-e9f6-4519-991b-255ca53654ac.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725907056164884/b56580de-53be-454f-973b-610c3b862825.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725911397662730/bd95638b-569d-48c7-9fd0-e9670a8d4afd.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725920788709396/c15c307a-702c-458d-a498-667b68fe235e.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725874316214322/098bbfbb-121a-4cf3-8368-202fe581e23f.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725856271138846/3d97068e-6273-4585-9fdb-5be0ce9711dd.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725847639392277/2c70623f-5544-497f-a351-74008f30d655.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725843789807646/2adacd99-5a7a-4484-99bb-de4375bbb2f9.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725835690737674/0a771629-dd49-4e70-89eb-ce2a0df68752.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725839867871292/0bfa90f5-d577-4ca6-8f4b-11cf780742e5.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725935971958824/de9e54dd-d5ac-42f1-b00d-1ec65a9c34f3.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725902253948988/b653dd22-b6a4-42d8-a608-a290eb826bdb.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725893769003048/938a5814-5575-49d5-bb43-e23a63f47f63.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <img
                      src="https://cdn.discordapp.com/attachments/669212231749206026/770725869643497522/78c6b2ad-72cc-447a-b723-50b9004e00fb.png"
                      style={{ maxWidth: 150, width: '100%' }}
                    />
                    <figcaption>
                      A lot of Unused Tile Asset Icons
                      <br />
                      <small>
                        Found by
                        {' '}
                        {usernames.bananaCat}
                      </small>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

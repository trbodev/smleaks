import type { GetStaticPropsResult } from 'next';

export function getStaticProps():GetStaticPropsResult<{
  title:string
  id:string
  description: string
}> {
  return {
    props: {
      title: 'Links',
      id: 'links',
      description: 'Some useful links related to SMLeaks.',
    },
  };
}

export default function Links() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Links</h1>
      </div>
      <div className="card">
        <article>
          <ul>
            <li>
              <a href="https://scrapmechanic.com">Scrap Mechanic</a>
              <ul>
                <li>
                  <a href="https://twitter.com/scrapmechanic">Twitter</a>
                </li>
                <li>
                  <a href="https://facebook.com/scrapmechanic">Facebook</a>
                </li>
                <li>
                  <a href="https://store.steampowered.com/app/387990/">
                    Steam Store
                  </a>
                </li>
                <li>
                  <a href="https://steamcommunity.com/app/387990/">
                    Steam Community
                  </a>
                </li>
                <li>
                  <a href="https://steamdb.info/app/387990">SteamDB</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://axolotgames.com">Axolot Games</a>
              <ul>
                <li>
                  <a href="https://github.com/AxolotGames">Github</a>
                </li>
                <li>
                  <a href="https://twitter.com/AxolotGames">Twitter</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://steamdb.info">SteamDB</a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

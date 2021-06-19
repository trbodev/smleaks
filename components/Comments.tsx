import config from '../other/config';

export default function Comments() {
  return config.comments.enabled ? (
    <script
      src="https://utteranc.es/client.js"
      data-repo={config.comments.repo}
      data-issue-term="title"
      data-theme="github-dark"
      crossOrigin="anonymous"
      async
    />
  ) : (<></>);
}

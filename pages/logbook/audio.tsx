/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */

// next imports
import type { GetStaticPropsResult } from 'next';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
}> {
  return {
    props: {
      title: 'Logbook Audio',
      id: 'logbook-audio',
    },
  };
}

export default function LogbookAudio() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Log Book Audio</h1>
      </div>
      <div className="card">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            // eslint-disable-next-line no-param-reassign
            index += 1;
            return (
              <div id={`logfile-${index}`} key={`logfile-${index}`}>
                VO_Straggler_
                {index > 9 ? index : `0${index}`}
                <br />
                <audio controls>
                  <source
                    src={`/audio/VO_Straggler_${
                      index > 9 ? index : `0${index}`
                    }.wav`}
                    type="audio/wav"
                  />
                  <source
                    src={`/audio/VO_Straggler_${
                      index > 9 ? index : `0${index}`
                    }.mp3`}
                    type="audio/mp3"
                  />
                </audio>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
}

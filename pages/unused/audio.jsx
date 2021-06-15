/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Audio',
    id: 'unused-audio',
  },
});

export default function UnusedAudio() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Audio</h1>
      </div>
      <div className="card">
        <a id="npe-turret-activate" href="#" style={{ visibility: 'hidden' }} />
        NPE_Turret_Activate (Unknown Origins)
        <br />
        <audio controls="controls">
          <source src="/audio/NPE_Turret_Activate.wav" type="audio/wav" />
        </audio>
        <br />
        <a
          id="npe-drone-shoot"
          href="#"
          style={{ visibility: 'hidden' }}
        />
        {' '}
        NPE_Drone_Shoot (Farmbot Pesticide Gun Shoot?)
        <br />
        <audio controls="controls">
          <source src="/audio/NPE_Drone_Shoot.wav" type="audio/wav" />
        </audio>
        <br />
        <a id="moving-water" href="#" style={{ visibility: 'hidden' }} />
        {' '}
        Moving
        Water?
        <br />
        <small>water_movement_big</small>
        <br />
        <audio controls="controls">
          <source src="/audio/water_movement_big.wav" type="audio/wav" />
        </audio>
        <br />
        <small>water_movement_small</small>
        <br />
        <audio controls="controls">
          <source src="/audio/water_movement_small.wav" type="audio/wav" />
        </audio>
        <br />
        <br />
        <a id="caves" href="#" style={{ visibility: 'hidden' }} />
        Caves? (Has been confirmed in
        {' '}
        <Link scroll prefetch={false} href="/devblog/20#underground">
          <a href="/devblog/20#underground">Devblog 20</a>
        </Link>
        )
        <br />
        <small>amb_2D_cave_base</small>
        <br />
        <audio controls="controls">
          <source src="/audio/amb_2D_cave_base.wav" type="audio/wav" />
        </audio>
        <br />
        <small>amb_2D_cave_waterdrip_intense</small>
        <br />
        <audio controls="controls">
          <source
            src="/audio/amb_2D_cave_waterdrip_intense.wav"
            type="audio/wav"
          />
        </audio>
        <br />
        <small>amb_2D_cave_waterdrip_single</small>
        <br />
        <audio controls="controls">
          <source
            src="/audio/amb_2D_cave_waterdrip_single.wav"
            type="audio/wav"
          />
        </audio>
        <br />
        <a id="alarms" href="#" style={{ visibility: 'hidden' }} />
        {' '}
        Digital
        Clock Alarms (Possibly from
        {' '}
        <Link scroll href="/devblog/21#digital-clock" prefetch={false}>
          <a href="/devblog/21#digital-clock">Devblog 21</a>
        </Link>
        )
        {' '}
        <br />
        {Array(4)
          .fill(0)
          .map((e, i) => (
            <div>
              <small>
                alarm0
                {i + 1}
              </small>
              <br />
              <audio controls="controls">
                <source src={`/audio/alarm0${i + 1}.wav`} type="audio/wav" />
              </audio>
              <br />
            </div>
          ))}
        <a id="other" href="#" style={{ visibility: 'hidden' }} />
        {' '}
        Other
        {' '}
        <br />
        <small>painttool_eraseslurp</small>
        <br />
        <audio controls="controls">
          <source src="/audio/painttool_eraseslurp.wav" type="audio/wav" />
        </audio>
        <br />
        <small>encrypter_on</small>
        <br />
        <audio controls="controls">
          <source src="/audio/encrypter_on.wav" type="audio/wav" />
        </audio>
        <br />
        <small>encrypter_off</small>
        <br />
        <audio controls="controls">
          <source src="/audio/encrypter_off.wav" type="audio/wav" />
        </audio>
      </div>
    </div>
  );
}

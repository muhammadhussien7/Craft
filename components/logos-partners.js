import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const LogosPartners = (props) => {
  return (
    <>
      <div className="logos-partners-container1 section-padding">
        <div className="logos-partners-max-width section-max-width">
          <h2 className="logos-partners-text1 heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="logos-partners-text2">
                  Trusted by the world&apos;s best companies social proof to
                  build credibility
                </span>
              </Fragment>
            )}
          </h2>
          <div className="grid-6">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos-partners-logo1 img-ratio-16-9"
            />
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos-partners-logo2 img-ratio-16-9"
            />
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos-partners-logo3 img-ratio-16-9"
            />
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos-partners-logo4 img-ratio-16-9"
            />
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos-partners-logo5 img-ratio-16-9"
            />
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos-partners-logo6 img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos-partners-container1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .logos-partners-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .logos-partners-text1 {
            text-align: center;
          }
          .logos-partners-logo1 {
            object-fit: contain;
          }
          .logos-partners-logo2 {
            object-fit: contain;
          }
          .logos-partners-logo3 {
            object-fit: contain;
          }
          .logos-partners-logo4 {
            object-fit: contain;
          }
          .logos-partners-logo5 {
            object-fit: contain;
          }
          .logos-partners-logo6 {
            object-fit: contain;
          }
          .logos-partners-text2 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .logos-partners-container1 {
              gap: var(--dl-layout-space-twounits);
            }
            .logos-partners-max-width {
              gap: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

LogosPartners.defaultProps = {
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo3Alt: 'Sustainable Agriculture Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo5Alt: 'Logo5',
  logo1Alt: 'Green Chemistry Logo',
  logo6Alt: 'Logo6',
  logo2Alt: 'Organic Products Logo',
  logo4Alt: 'Logo4',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  heading1: undefined,
}

LogosPartners.propTypes = {
  logo4Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo6Src: PropTypes.string,
  logo1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default LogosPartners

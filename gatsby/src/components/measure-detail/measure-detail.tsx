import React from 'react';
import reactStringReplace from 'react-string-replace';

import Link from '@/components/link';
import { IMeasureDetailFragment } from '@graphql-types';
import { useLocation } from '@reach/router';
import { graphql } from 'gatsby';
import TopicDetail from '../topic-detail';
import { useTranslation } from '../i18n';
import { RegionsMarker, TimeMarker } from '../marker';
import LastUpdate from '../last-update';
import { UpdateWarning } from '../update-warning/update-warning';
import Time from '../time';
import { getCurrentMeasureVersion } from './getCurrentMeasureVersion.util';
import { useHasMounted } from '../client-only';

interface IProps {
  measure: IMeasureDetailFragment;
}

const MeasureDetail: React.FC<IProps> = ({ measure }) => {
  const { t } = useTranslation();
  const hasRegion = Boolean(measure?.relationships?.region?.length);
  const { hash } = useLocation();
  const hasMounted = useHasMounted();
  const {
    versionToDisplay,
    isDisplayedVersionCurrent,
    nextVersionFrom,
    nextVersionHash,
  } = getCurrentMeasureVersion(hasMounted ? hash : '', measure);
  const hasSourceLink = Boolean(versionToDisplay.source);
  const hasTimeConstraint = Boolean(
    versionToDisplay?.valid_from || versionToDisplay?.valid_to,
  );

  return (
    <>
      <TopicDetail
        title={measure.title}
        subtitle={measure.norm}
        lastUpdated={measure?.last_updated}
        processedContent={versionToDisplay?.content?.processed}
        beforeContent={
          <>
            <div className="bg-white mb-3">
              {hasRegion && (
                <RegionsMarker regions={measure?.relationships?.region} />
              )}
              {hasTimeConstraint && (
                <TimeMarker
                  displayTime
                  validFrom={versionToDisplay?.valid_from}
                  validTo={versionToDisplay?.valid_to}
                />
              )}
              <hr />
            </div>
            {!isDisplayedVersionCurrent && (
              <UpdateWarning
                key={`${measure.path.alias}-current`}
                className="position-relative"
                variant="alert"
                title={reactStringReplace(
                  reactStringReplace(
                    t('measure_valid_from'),
                    /{{(.*)}}/,
                    (match) => (
                      <a
                        href="#"
                        className="stretched-link"
                        key="current-version-link"
                      >
                        {match}
                      </a>
                    ),
                  ),
                  '{date}',
                  () => (
                    <Time
                      datetime={versionToDisplay?.valid_from}
                      suffix=""
                      key="current-version-time"
                    />
                  ),
                )}
              />
            )}
            {nextVersionFrom && (
              <UpdateWarning
                key={`${measure.path.alias}-future`}
                className="position-relative"
                variant="info"
                title={reactStringReplace(
                  reactStringReplace(
                    t('measure_changes'),
                    /{{(.*)}}/,
                    (match) => (
                      <a
                        href={nextVersionHash}
                        className="stretched-link"
                        key="next-version-link"
                      >
                        {match}
                      </a>
                    ),
                  ),
                  '{date}',
                  () => (
                    <Time
                      datetime={nextVersionFrom}
                      suffix=""
                      key="next-version-time"
                    />
                  ),
                )}
              />
            )}
          </>
        }
      />
      <div className="bg-white mb-3 pb-2 pb-md-0 px-2 px-md-3">
        {hasSourceLink && (
          <div className="pt-2">
            <hr />
            <h3 className="mb-1 color-blue-dark">{t('related')}</h3>
            <div>
              <Link
                className="color-blue mb-1"
                to={versionToDisplay.source.uri}
              >
                {versionToDisplay.source.title}
              </Link>
            </div>
          </div>
        )}
        <LastUpdate isMobile lastUpdated={measure?.last_updated} />
      </div>
    </>
  );
};

export const query = graphql`
  fragment MeasureDetail on measure {
    title
    norm
    content: description {
      processed
    }
    source {
      uri
      title
    }
    relationships {
      region {
        name
      }
      situation_type: measure_type {
        name
        path {
          alias
        }
      }
      related_situations: situation {
        title
        path {
          alias
          langcode
        }
      }
      versions {
        content {
          processed
        }
        valid_from
        valid_to
        source {
          uri
          title
        }
      }
    }
    path {
      alias
    }
    changed
    valid_from
    valid_to
    last_updated
  }
`;

export default MeasureDetail;

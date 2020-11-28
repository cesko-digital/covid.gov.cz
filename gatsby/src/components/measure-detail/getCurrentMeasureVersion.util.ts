import { IMeasureDetailFragment } from '@graphql-types';

export const getCurrentMeasureVersion = (
  dateVersionHash: string,
  measure: IMeasureDetailFragment,
) => {
  const currentVersion = measure;
  const date = dateVersionHash.replace('#', '');
  const sortedFutureVersions =
    measure?.relationships?.versions
      .filter((v) => v.valid_from > currentVersion?.valid_from)
      .sort((a, b) => (a.valid_from > b.valid_from ? 1 : -1)) ?? [];

  const futureVersionToDisplayIndex = sortedFutureVersions.findIndex(
    (v) => v.valid_from.replace(/T.*/, '') === date,
  );
  const futureVersion = sortedFutureVersions[futureVersionToDisplayIndex];
  const versionToDisplay = futureVersion || currentVersion;

  const nextVersion = sortedFutureVersions[futureVersionToDisplayIndex + 1];
  const nextVersionFrom = nextVersion ? nextVersion.valid_from : '';
  const nextVersionDate = nextVersionFrom.replace(/T.*/, '');
  const nextVersionHash = nextVersionDate ? `#${nextVersionDate}` : undefined;
  const isDisplayedVersionCurrent = futureVersionToDisplayIndex === -1;

  return {
    versionToDisplay,
    isDisplayedVersionCurrent,
    nextVersionFrom,
    nextVersionHash,
  };
};

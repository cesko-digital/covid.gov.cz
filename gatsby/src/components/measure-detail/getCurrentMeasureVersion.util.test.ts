import { IMeasureDetailFragment } from '@graphql-types';
import { getCurrentMeasureVersion } from './getCurrentMeasureVersion.util';

type IVersion = IMeasureDetailFragment['relationships']['versions'][number];

const currentVersionOctober: IVersion = {
  content: {
    processed: 'current version content - end of October',
  },
  valid_from: '2020-10-30T00:00:00Z',
};

const futureVersionNovember: IVersion = {
  content: {
    processed: 'future version content - end of November',
  },
  valid_from: '2020-11-30T00:00:00Z',
};

const futureVersionDecember: IVersion = {
  content: {
    processed: 'future version content - end of December',
  },
  valid_from: '2020-12-30T00:00:00Z',
};

const getTestMeasureData = (
  versionsOverride?: Partial<
    IMeasureDetailFragment['relationships']['versions']
  >,
): Partial<IMeasureDetailFragment> => ({
  ...currentVersionOctober,
  relationships: {
    versions: versionsOverride || [
      futureVersionNovember,
      futureVersionDecember,
    ],
  },
});

describe(getCurrentMeasureVersion.name, () => {
  describe('returning the current version', () => {
    it('the measure when the measure date hash is empty', () => {
      const measureDataHash = '';
      const measure = getTestMeasureData();

      const result = getCurrentMeasureVersion(measureDataHash, measure);
      expect(result.isDisplayedVersionCurrent).toBe(true);
      expect(result.versionToDisplay).toMatchObject(currentVersionOctober);
      expect(result.nextVersionHash).toEqual('#2020-11-30');
    });
    it('when the measure date hash is a November date, but versions are empty', () => {
      const measureDataHash = '2020-11-30';
      const measure = getTestMeasureData([]); // empty versions

      const result = getCurrentMeasureVersion(measureDataHash, measure);
      expect(result.isDisplayedVersionCurrent).toBe(true);
      expect(result.versionToDisplay).toMatchObject(currentVersionOctober);
      expect(result.nextVersionHash).toBeUndefined();
    });

    it('when the measure date hash is a November date, but no such version starting from that date exists', () => {
      const measureDataHash = '2020-11-11'; // no version does start from this date
      const measure = getTestMeasureData();

      const result = getCurrentMeasureVersion(measureDataHash, measure);
      expect(result.isDisplayedVersionCurrent).toBe(true);
      expect(result.versionToDisplay).toMatchObject(currentVersionOctober);
      expect(result.nextVersionHash).toEqual('#2020-11-30');
    });
  });
  describe('returning a future version', () => {
    it('should return the November version of the measure when the measure date hash is a November date', () => {
      const measureDataHash = '2020-11-30';
      const measure = getTestMeasureData();

      const result = getCurrentMeasureVersion(measureDataHash, measure);
      expect(result.isDisplayedVersionCurrent).toBe(false);
      expect(result.versionToDisplay).toMatchObject(futureVersionNovember);
      expect(result.nextVersionHash).toEqual('#2020-12-30');
    });
    it('should return the December version of the measure when the measure date hash is a December date', () => {
      const measureDataHash = '2020-12-30';
      const measure = getTestMeasureData();

      const result = getCurrentMeasureVersion(measureDataHash, measure);
      expect(result.isDisplayedVersionCurrent).toBe(false);
      expect(result.versionToDisplay).toMatchObject(futureVersionDecember);
      expect(result.nextVersionHash).toBeUndefined();
    });
  });
});

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type IArea = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__tid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['Date']>;
  path?: Maybe<IAreaPath>;
  relationships?: Maybe<IAreaRelationships>;
};


export type IAreaChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IAreaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IAreaEdge>;
  nodes: Array<IArea>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IAreaGroupConnection>;
};


export type IAreaConnectionDistinctArgs = {
  field: IAreaFieldsEnum;
};


export type IAreaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IAreaFieldsEnum;
};

export type IAreaEdge = {
  next?: Maybe<IArea>;
  node: IArea;
  previous?: Maybe<IArea>;
};

export type IAreaFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__tid'
  | 'langcode'
  | 'status'
  | 'name'
  | 'weight'
  | 'changed'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'relationships___icon___id'
  | 'relationships___icon___parent___id'
  | 'relationships___icon___parent___children'
  | 'relationships___icon___children'
  | 'relationships___icon___children___id'
  | 'relationships___icon___children___children'
  | 'relationships___icon___internal___content'
  | 'relationships___icon___internal___contentDigest'
  | 'relationships___icon___internal___description'
  | 'relationships___icon___internal___fieldOwners'
  | 'relationships___icon___internal___ignoreType'
  | 'relationships___icon___internal___mediaType'
  | 'relationships___icon___internal___owner'
  | 'relationships___icon___internal___type'
  | 'relationships___icon___drupal_id'
  | 'relationships___icon___langcode'
  | 'relationships___icon___path___langcode'
  | 'relationships___icon___code'
  | 'relationships___icon___source'
  | 'relationships___icon___relationships___situation'
  | 'relationships___icon___relationships___area'
  | 'relationships___icon___relationships___measure_type'
  | 'relationships___icon___relationships___measure'
  | 'relationships___situation'
  | 'relationships___situation___id'
  | 'relationships___situation___parent___id'
  | 'relationships___situation___parent___children'
  | 'relationships___situation___children'
  | 'relationships___situation___children___id'
  | 'relationships___situation___children___children'
  | 'relationships___situation___internal___content'
  | 'relationships___situation___internal___contentDigest'
  | 'relationships___situation___internal___description'
  | 'relationships___situation___internal___fieldOwners'
  | 'relationships___situation___internal___ignoreType'
  | 'relationships___situation___internal___mediaType'
  | 'relationships___situation___internal___owner'
  | 'relationships___situation___internal___type'
  | 'relationships___situation___drupal_id'
  | 'relationships___situation___drupal_internal__nid'
  | 'relationships___situation___langcode'
  | 'relationships___situation___status'
  | 'relationships___situation___title'
  | 'relationships___situation___created'
  | 'relationships___situation___changed'
  | 'relationships___situation___promote'
  | 'relationships___situation___sticky'
  | 'relationships___situation___moderation_state'
  | 'relationships___situation___path___alias'
  | 'relationships___situation___path___pid'
  | 'relationships___situation___path___langcode'
  | 'relationships___situation___meta_description'
  | 'relationships___situation___questions_answers'
  | 'relationships___situation___questions_answers___value'
  | 'relationships___situation___questions_answers___processed'
  | 'relationships___situation___questions_answers___question'
  | 'relationships___situation___links'
  | 'relationships___situation___links___uri'
  | 'relationships___situation___links___title'
  | 'relationships___situation___valid_from'
  | 'relationships___situation___valid_to'
  | 'relationships___situation___content___value'
  | 'relationships___situation___content___format'
  | 'relationships___situation___content___processed'
  | 'relationships___situation___relationships___region'
  | 'relationships___situation___relationships___measures'
  | 'relationships___situation___relationships___related_situations'
  | 'relationships___situation___relationships___situation'
  | 'relationships___situation___related_situations'
  | 'relationships___situation___related_situations___arity'
  | 'relationships___homepage'
  | 'relationships___homepage___id'
  | 'relationships___homepage___parent___id'
  | 'relationships___homepage___parent___children'
  | 'relationships___homepage___children'
  | 'relationships___homepage___children___id'
  | 'relationships___homepage___children___children'
  | 'relationships___homepage___internal___content'
  | 'relationships___homepage___internal___contentDigest'
  | 'relationships___homepage___internal___description'
  | 'relationships___homepage___internal___fieldOwners'
  | 'relationships___homepage___internal___ignoreType'
  | 'relationships___homepage___internal___mediaType'
  | 'relationships___homepage___internal___owner'
  | 'relationships___homepage___internal___type'
  | 'relationships___homepage___drupal_id'
  | 'relationships___homepage___drupal_internal__nid'
  | 'relationships___homepage___langcode'
  | 'relationships___homepage___status'
  | 'relationships___homepage___title'
  | 'relationships___homepage___created'
  | 'relationships___homepage___changed'
  | 'relationships___homepage___promote'
  | 'relationships___homepage___sticky'
  | 'relationships___homepage___moderation_state'
  | 'relationships___homepage___path___langcode'
  | 'relationships___homepage___measure_label___value'
  | 'relationships___homepage___measure_label___format'
  | 'relationships___homepage___measure_label___processed'
  | 'relationships___homepage___situation_label___value'
  | 'relationships___homepage___situation_label___format'
  | 'relationships___homepage___situation_label___processed'
  | 'relationships___homepage___measure_description'
  | 'relationships___homepage___measure_link___uri'
  | 'relationships___homepage___measure_link___title'
  | 'relationships___homepage___measure_text'
  | 'relationships___homepage___situation_description'
  | 'relationships___homepage___situation_link___uri'
  | 'relationships___homepage___situation_link___title'
  | 'relationships___homepage___situation_text'
  | 'relationships___homepage___meta_description'
  | 'relationships___homepage___relationships___situation_items'
  | 'relationships___homepage___relationships___measure_items';

export type IAreaFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  weight?: Maybe<IStringQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  path?: Maybe<IAreaPathFilterInput>;
  relationships?: Maybe<IAreaRelationshipsFilterInput>;
};

export type IAreaFilterListInput = {
  elemMatch?: Maybe<IAreaFilterInput>;
};

export type IAreaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IAreaEdge>;
  nodes: Array<IArea>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IAreaPath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
};

export type IAreaPathFilterInput = {
  alias?: Maybe<IStringQueryOperatorInput>;
  pid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IAreaRelationships = {
  icon?: Maybe<IIcons>;
  situation?: Maybe<Array<Maybe<ISituation>>>;
  homepage?: Maybe<Array<Maybe<IHomepage>>>;
};

export type IAreaRelationshipsFilterInput = {
  icon?: Maybe<IIconsFilterInput>;
  situation?: Maybe<ISituationFilterListInput>;
  homepage?: Maybe<IHomepageFilterListInput>;
};

export type IAreaSortInput = {
  fields?: Maybe<Array<Maybe<IAreaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IBlocks = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  content?: Maybe<IBlocksContent>;
};

export type IBlocksConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IBlocksEdge>;
  nodes: Array<IBlocks>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IBlocksGroupConnection>;
};


export type IBlocksConnectionDistinctArgs = {
  field: IBlocksFieldsEnum;
};


export type IBlocksConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IBlocksFieldsEnum;
};

export type IBlocksContent = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type IBlocksContentFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  format?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
};

export type IBlocksEdge = {
  next?: Maybe<IBlocks>;
  node: IBlocks;
  previous?: Maybe<IBlocks>;
};

export type IBlocksFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__id'
  | 'langcode'
  | 'status'
  | 'info'
  | 'content___value'
  | 'content___format'
  | 'content___processed';

export type IBlocksFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  info?: Maybe<IStringQueryOperatorInput>;
  content?: Maybe<IBlocksContentFilterInput>;
};

export type IBlocksGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IBlocksEdge>;
  nodes: Array<IBlocks>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IBlocksSortInput = {
  fields?: Maybe<Array<Maybe<IBlocksFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IBooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type IDateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type IDirectory = INode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IDirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IDirectoryEdge>;
  nodes: Array<IDirectory>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IDirectoryGroupConnection>;
};


export type IDirectoryConnectionDistinctArgs = {
  field: IDirectoryFieldsEnum;
};


export type IDirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IDirectoryFieldsEnum;
};

export type IDirectoryEdge = {
  next?: Maybe<IDirectory>;
  node: IDirectory;
  previous?: Maybe<IDirectory>;
};

export type IDirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type IDirectoryFilterInput = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  absolutePath?: Maybe<IStringQueryOperatorInput>;
  relativePath?: Maybe<IStringQueryOperatorInput>;
  extension?: Maybe<IStringQueryOperatorInput>;
  size?: Maybe<IIntQueryOperatorInput>;
  prettySize?: Maybe<IStringQueryOperatorInput>;
  modifiedTime?: Maybe<IDateQueryOperatorInput>;
  accessTime?: Maybe<IDateQueryOperatorInput>;
  changeTime?: Maybe<IDateQueryOperatorInput>;
  birthTime?: Maybe<IDateQueryOperatorInput>;
  root?: Maybe<IStringQueryOperatorInput>;
  dir?: Maybe<IStringQueryOperatorInput>;
  base?: Maybe<IStringQueryOperatorInput>;
  ext?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  dev?: Maybe<IIntQueryOperatorInput>;
  mode?: Maybe<IIntQueryOperatorInput>;
  nlink?: Maybe<IIntQueryOperatorInput>;
  uid?: Maybe<IIntQueryOperatorInput>;
  gid?: Maybe<IIntQueryOperatorInput>;
  rdev?: Maybe<IIntQueryOperatorInput>;
  ino?: Maybe<IFloatQueryOperatorInput>;
  atimeMs?: Maybe<IFloatQueryOperatorInput>;
  mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  atime?: Maybe<IDateQueryOperatorInput>;
  mtime?: Maybe<IDateQueryOperatorInput>;
  ctime?: Maybe<IDateQueryOperatorInput>;
  birthtime?: Maybe<IDateQueryOperatorInput>;
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  blksize?: Maybe<IIntQueryOperatorInput>;
  blocks?: Maybe<IIntQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type IDirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IDirectoryEdge>;
  nodes: Array<IDirectory>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IDirectorySortInput = {
  fields?: Maybe<Array<Maybe<IDirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IDrupal_File = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__fid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  uri?: Maybe<IDrupal_FileUri>;
  filemime?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
};


export type IDrupal_FileCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IDrupal_FileChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDrupal_FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IDrupal_FileEdge>;
  nodes: Array<IDrupal_File>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IDrupal_FileGroupConnection>;
};


export type IDrupal_FileConnectionDistinctArgs = {
  field: IDrupal_FileFieldsEnum;
};


export type IDrupal_FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IDrupal_FileFieldsEnum;
};

export type IDrupal_FileEdge = {
  next?: Maybe<IDrupal_File>;
  node: IDrupal_File;
  previous?: Maybe<IDrupal_File>;
};

export type IDrupal_FileFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__fid'
  | 'langcode'
  | 'filename'
  | 'uri___value'
  | 'uri___url'
  | 'filemime'
  | 'filesize'
  | 'status'
  | 'created'
  | 'changed';

export type IDrupal_FileFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__fid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  filename?: Maybe<IStringQueryOperatorInput>;
  uri?: Maybe<IDrupal_FileUriFilterInput>;
  filemime?: Maybe<IStringQueryOperatorInput>;
  filesize?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
};

export type IDrupal_FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IDrupal_FileEdge>;
  nodes: Array<IDrupal_File>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IDrupal_FileSortInput = {
  fields?: Maybe<Array<Maybe<IDrupal_FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IDrupal_FileUri = {
  value?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type IDrupal_FileUriFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  url?: Maybe<IStringQueryOperatorInput>;
};

export type IDuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type IFile = INode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<IImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IFileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IFileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IFileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IFileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IFileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IFileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IFileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IFileEdge>;
  nodes: Array<IFile>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IFileGroupConnection>;
};


export type IFileConnectionDistinctArgs = {
  field: IFileFieldsEnum;
};


export type IFileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IFileFieldsEnum;
};

export type IFileEdge = {
  next?: Maybe<IFile>;
  node: IFile;
  previous?: Maybe<IFile>;
};

export type IFileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImage___imageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type IFileFilterInput = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  absolutePath?: Maybe<IStringQueryOperatorInput>;
  relativePath?: Maybe<IStringQueryOperatorInput>;
  extension?: Maybe<IStringQueryOperatorInput>;
  size?: Maybe<IIntQueryOperatorInput>;
  prettySize?: Maybe<IStringQueryOperatorInput>;
  modifiedTime?: Maybe<IDateQueryOperatorInput>;
  accessTime?: Maybe<IDateQueryOperatorInput>;
  changeTime?: Maybe<IDateQueryOperatorInput>;
  birthTime?: Maybe<IDateQueryOperatorInput>;
  root?: Maybe<IStringQueryOperatorInput>;
  dir?: Maybe<IStringQueryOperatorInput>;
  base?: Maybe<IStringQueryOperatorInput>;
  ext?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  dev?: Maybe<IIntQueryOperatorInput>;
  mode?: Maybe<IIntQueryOperatorInput>;
  nlink?: Maybe<IIntQueryOperatorInput>;
  uid?: Maybe<IIntQueryOperatorInput>;
  gid?: Maybe<IIntQueryOperatorInput>;
  rdev?: Maybe<IIntQueryOperatorInput>;
  ino?: Maybe<IFloatQueryOperatorInput>;
  atimeMs?: Maybe<IFloatQueryOperatorInput>;
  mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  atime?: Maybe<IDateQueryOperatorInput>;
  mtime?: Maybe<IDateQueryOperatorInput>;
  ctime?: Maybe<IDateQueryOperatorInput>;
  birthtime?: Maybe<IDateQueryOperatorInput>;
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  blksize?: Maybe<IIntQueryOperatorInput>;
  blocks?: Maybe<IIntQueryOperatorInput>;
  publicURL?: Maybe<IStringQueryOperatorInput>;
  childImageSharp?: Maybe<IImageSharpFilterInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type IFileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IFileEdge>;
  nodes: Array<IFile>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IFileSortInput = {
  fields?: Maybe<Array<Maybe<IFileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IFloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IHomepage = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['String']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<IHomepagePath>;
  measure_label?: Maybe<IHomepageMeasure_Label>;
  situation_label?: Maybe<IHomepageSituation_Label>;
  measure_description?: Maybe<Array<Maybe<Scalars['String']>>>;
  measure_link?: Maybe<IHomepageMeasure_Link>;
  measure_text?: Maybe<Scalars['String']>;
  situation_description?: Maybe<Array<Maybe<Scalars['String']>>>;
  situation_link?: Maybe<IHomepageSituation_Link>;
  situation_text?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  relationships?: Maybe<IHomepageRelationships>;
};


export type IHomepageCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IHomepageChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IHomepageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IHomepageEdge>;
  nodes: Array<IHomepage>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IHomepageGroupConnection>;
};


export type IHomepageConnectionDistinctArgs = {
  field: IHomepageFieldsEnum;
};


export type IHomepageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IHomepageFieldsEnum;
};

export type IHomepageEdge = {
  next?: Maybe<IHomepage>;
  node: IHomepage;
  previous?: Maybe<IHomepage>;
};

export type IHomepageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'langcode'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'moderation_state'
  | 'path___langcode'
  | 'measure_label___value'
  | 'measure_label___format'
  | 'measure_label___processed'
  | 'situation_label___value'
  | 'situation_label___format'
  | 'situation_label___processed'
  | 'measure_description'
  | 'measure_link___uri'
  | 'measure_link___title'
  | 'measure_text'
  | 'situation_description'
  | 'situation_link___uri'
  | 'situation_link___title'
  | 'situation_text'
  | 'meta_description'
  | 'relationships___situation_items'
  | 'relationships___situation_items___id'
  | 'relationships___situation_items___parent___id'
  | 'relationships___situation_items___parent___children'
  | 'relationships___situation_items___children'
  | 'relationships___situation_items___children___id'
  | 'relationships___situation_items___children___children'
  | 'relationships___situation_items___internal___content'
  | 'relationships___situation_items___internal___contentDigest'
  | 'relationships___situation_items___internal___description'
  | 'relationships___situation_items___internal___fieldOwners'
  | 'relationships___situation_items___internal___ignoreType'
  | 'relationships___situation_items___internal___mediaType'
  | 'relationships___situation_items___internal___owner'
  | 'relationships___situation_items___internal___type'
  | 'relationships___situation_items___drupal_id'
  | 'relationships___situation_items___drupal_internal__tid'
  | 'relationships___situation_items___langcode'
  | 'relationships___situation_items___status'
  | 'relationships___situation_items___name'
  | 'relationships___situation_items___weight'
  | 'relationships___situation_items___changed'
  | 'relationships___situation_items___path___alias'
  | 'relationships___situation_items___path___pid'
  | 'relationships___situation_items___path___langcode'
  | 'relationships___situation_items___relationships___situation'
  | 'relationships___situation_items___relationships___homepage'
  | 'relationships___measure_items'
  | 'relationships___measure_items___id'
  | 'relationships___measure_items___parent___id'
  | 'relationships___measure_items___parent___children'
  | 'relationships___measure_items___children'
  | 'relationships___measure_items___children___id'
  | 'relationships___measure_items___children___children'
  | 'relationships___measure_items___internal___content'
  | 'relationships___measure_items___internal___contentDigest'
  | 'relationships___measure_items___internal___description'
  | 'relationships___measure_items___internal___fieldOwners'
  | 'relationships___measure_items___internal___ignoreType'
  | 'relationships___measure_items___internal___mediaType'
  | 'relationships___measure_items___internal___owner'
  | 'relationships___measure_items___internal___type'
  | 'relationships___measure_items___drupal_id'
  | 'relationships___measure_items___drupal_internal__nid'
  | 'relationships___measure_items___langcode'
  | 'relationships___measure_items___status'
  | 'relationships___measure_items___title'
  | 'relationships___measure_items___created'
  | 'relationships___measure_items___changed'
  | 'relationships___measure_items___promote'
  | 'relationships___measure_items___sticky'
  | 'relationships___measure_items___moderation_state'
  | 'relationships___measure_items___path___alias'
  | 'relationships___measure_items___path___pid'
  | 'relationships___measure_items___path___langcode'
  | 'relationships___measure_items___description___value'
  | 'relationships___measure_items___description___format'
  | 'relationships___measure_items___description___processed'
  | 'relationships___measure_items___meta_description'
  | 'relationships___measure_items___norm'
  | 'relationships___measure_items___source___uri'
  | 'relationships___measure_items___source___title'
  | 'relationships___measure_items___valid_from'
  | 'relationships___measure_items___valid_to'
  | 'relationships___measure_items___relationships___homepage'
  | 'relationships___measure_items___relationships___region'
  | 'relationships___measure_items___relationships___situation';

export type IHomepageFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IHomepagePathFilterInput>;
  measure_label?: Maybe<IHomepageMeasure_LabelFilterInput>;
  situation_label?: Maybe<IHomepageSituation_LabelFilterInput>;
  measure_description?: Maybe<IStringQueryOperatorInput>;
  measure_link?: Maybe<IHomepageMeasure_LinkFilterInput>;
  measure_text?: Maybe<IStringQueryOperatorInput>;
  situation_description?: Maybe<IStringQueryOperatorInput>;
  situation_link?: Maybe<IHomepageSituation_LinkFilterInput>;
  situation_text?: Maybe<IStringQueryOperatorInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
  relationships?: Maybe<IHomepageRelationshipsFilterInput>;
};

export type IHomepageFilterListInput = {
  elemMatch?: Maybe<IHomepageFilterInput>;
};

export type IHomepageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IHomepageEdge>;
  nodes: Array<IHomepage>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IHomepageMeasure_Label = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type IHomepageMeasure_LabelFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  format?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
};

export type IHomepageMeasure_Link = {
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IHomepageMeasure_LinkFilterInput = {
  uri?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
};

export type IHomepagePath = {
  langcode?: Maybe<Scalars['String']>;
};

export type IHomepagePathFilterInput = {
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IHomepageRelationships = {
  situation_items?: Maybe<Array<Maybe<IArea>>>;
  measure_items?: Maybe<Array<Maybe<IMeasure>>>;
};

export type IHomepageRelationshipsFilterInput = {
  situation_items?: Maybe<IAreaFilterListInput>;
  measure_items?: Maybe<IMeasureFilterListInput>;
};

export type IHomepageSituation_Label = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type IHomepageSituation_LabelFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  format?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
};

export type IHomepageSituation_Link = {
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IHomepageSituation_LinkFilterInput = {
  uri?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
};

export type IHomepageSortInput = {
  fields?: Maybe<Array<Maybe<IHomepageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IIcons = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  path?: Maybe<IIconsPath>;
  code?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  relationships?: Maybe<IIconsRelationships>;
};

export type IIconsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IIconsEdge>;
  nodes: Array<IIcons>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IIconsGroupConnection>;
};


export type IIconsConnectionDistinctArgs = {
  field: IIconsFieldsEnum;
};


export type IIconsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IIconsFieldsEnum;
};

export type IIconsEdge = {
  next?: Maybe<IIcons>;
  node: IIcons;
  previous?: Maybe<IIcons>;
};

export type IIconsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'langcode'
  | 'path___langcode'
  | 'code'
  | 'source'
  | 'relationships___situation'
  | 'relationships___situation___id'
  | 'relationships___situation___parent___id'
  | 'relationships___situation___parent___children'
  | 'relationships___situation___children'
  | 'relationships___situation___children___id'
  | 'relationships___situation___children___children'
  | 'relationships___situation___internal___content'
  | 'relationships___situation___internal___contentDigest'
  | 'relationships___situation___internal___description'
  | 'relationships___situation___internal___fieldOwners'
  | 'relationships___situation___internal___ignoreType'
  | 'relationships___situation___internal___mediaType'
  | 'relationships___situation___internal___owner'
  | 'relationships___situation___internal___type'
  | 'relationships___situation___drupal_id'
  | 'relationships___situation___drupal_internal__nid'
  | 'relationships___situation___langcode'
  | 'relationships___situation___status'
  | 'relationships___situation___title'
  | 'relationships___situation___created'
  | 'relationships___situation___changed'
  | 'relationships___situation___promote'
  | 'relationships___situation___sticky'
  | 'relationships___situation___moderation_state'
  | 'relationships___situation___path___alias'
  | 'relationships___situation___path___pid'
  | 'relationships___situation___path___langcode'
  | 'relationships___situation___meta_description'
  | 'relationships___situation___questions_answers'
  | 'relationships___situation___questions_answers___value'
  | 'relationships___situation___questions_answers___processed'
  | 'relationships___situation___questions_answers___question'
  | 'relationships___situation___links'
  | 'relationships___situation___links___uri'
  | 'relationships___situation___links___title'
  | 'relationships___situation___valid_from'
  | 'relationships___situation___valid_to'
  | 'relationships___situation___content___value'
  | 'relationships___situation___content___format'
  | 'relationships___situation___content___processed'
  | 'relationships___situation___relationships___region'
  | 'relationships___situation___relationships___measures'
  | 'relationships___situation___relationships___related_situations'
  | 'relationships___situation___relationships___situation'
  | 'relationships___situation___related_situations'
  | 'relationships___situation___related_situations___arity'
  | 'relationships___area'
  | 'relationships___area___id'
  | 'relationships___area___parent___id'
  | 'relationships___area___parent___children'
  | 'relationships___area___children'
  | 'relationships___area___children___id'
  | 'relationships___area___children___children'
  | 'relationships___area___internal___content'
  | 'relationships___area___internal___contentDigest'
  | 'relationships___area___internal___description'
  | 'relationships___area___internal___fieldOwners'
  | 'relationships___area___internal___ignoreType'
  | 'relationships___area___internal___mediaType'
  | 'relationships___area___internal___owner'
  | 'relationships___area___internal___type'
  | 'relationships___area___drupal_id'
  | 'relationships___area___drupal_internal__tid'
  | 'relationships___area___langcode'
  | 'relationships___area___status'
  | 'relationships___area___name'
  | 'relationships___area___weight'
  | 'relationships___area___changed'
  | 'relationships___area___path___alias'
  | 'relationships___area___path___pid'
  | 'relationships___area___path___langcode'
  | 'relationships___area___relationships___situation'
  | 'relationships___area___relationships___homepage'
  | 'relationships___measure_type'
  | 'relationships___measure_type___id'
  | 'relationships___measure_type___parent___id'
  | 'relationships___measure_type___parent___children'
  | 'relationships___measure_type___children'
  | 'relationships___measure_type___children___id'
  | 'relationships___measure_type___children___children'
  | 'relationships___measure_type___internal___content'
  | 'relationships___measure_type___internal___contentDigest'
  | 'relationships___measure_type___internal___description'
  | 'relationships___measure_type___internal___fieldOwners'
  | 'relationships___measure_type___internal___ignoreType'
  | 'relationships___measure_type___internal___mediaType'
  | 'relationships___measure_type___internal___owner'
  | 'relationships___measure_type___internal___type'
  | 'relationships___measure_type___drupal_id'
  | 'relationships___measure_type___drupal_internal__tid'
  | 'relationships___measure_type___langcode'
  | 'relationships___measure_type___status'
  | 'relationships___measure_type___name'
  | 'relationships___measure_type___weight'
  | 'relationships___measure_type___path___alias'
  | 'relationships___measure_type___path___pid'
  | 'relationships___measure_type___path___langcode'
  | 'relationships___measure_type___relationships___measure'
  | 'relationships___measure'
  | 'relationships___measure___id'
  | 'relationships___measure___parent___id'
  | 'relationships___measure___parent___children'
  | 'relationships___measure___children'
  | 'relationships___measure___children___id'
  | 'relationships___measure___children___children'
  | 'relationships___measure___internal___content'
  | 'relationships___measure___internal___contentDigest'
  | 'relationships___measure___internal___description'
  | 'relationships___measure___internal___fieldOwners'
  | 'relationships___measure___internal___ignoreType'
  | 'relationships___measure___internal___mediaType'
  | 'relationships___measure___internal___owner'
  | 'relationships___measure___internal___type'
  | 'relationships___measure___drupal_id'
  | 'relationships___measure___drupal_internal__nid'
  | 'relationships___measure___langcode'
  | 'relationships___measure___status'
  | 'relationships___measure___title'
  | 'relationships___measure___created'
  | 'relationships___measure___changed'
  | 'relationships___measure___promote'
  | 'relationships___measure___sticky'
  | 'relationships___measure___moderation_state'
  | 'relationships___measure___path___alias'
  | 'relationships___measure___path___pid'
  | 'relationships___measure___path___langcode'
  | 'relationships___measure___description___value'
  | 'relationships___measure___description___format'
  | 'relationships___measure___description___processed'
  | 'relationships___measure___meta_description'
  | 'relationships___measure___norm'
  | 'relationships___measure___source___uri'
  | 'relationships___measure___source___title'
  | 'relationships___measure___valid_from'
  | 'relationships___measure___valid_to'
  | 'relationships___measure___relationships___homepage'
  | 'relationships___measure___relationships___region'
  | 'relationships___measure___relationships___situation';

export type IIconsFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IIconsPathFilterInput>;
  code?: Maybe<IStringQueryOperatorInput>;
  source?: Maybe<IStringQueryOperatorInput>;
  relationships?: Maybe<IIconsRelationshipsFilterInput>;
};

export type IIconsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IIconsEdge>;
  nodes: Array<IIcons>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IIconsPath = {
  langcode?: Maybe<Scalars['String']>;
};

export type IIconsPathFilterInput = {
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IIconsRelationships = {
  situation?: Maybe<Array<Maybe<ISituation>>>;
  area?: Maybe<Array<Maybe<IArea>>>;
  measure_type?: Maybe<Array<Maybe<IMeasure_Type>>>;
  measure?: Maybe<Array<Maybe<IMeasure>>>;
};

export type IIconsRelationshipsFilterInput = {
  situation?: Maybe<ISituationFilterListInput>;
  area?: Maybe<IAreaFilterListInput>;
  measure_type?: Maybe<IMeasure_TypeFilterListInput>;
  measure?: Maybe<IMeasureFilterListInput>;
};

export type IIconsSortInput = {
  fields?: Maybe<Array<Maybe<IIconsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type IImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type IImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type IImageLayout = 
  | 'FIXED'
  | 'FLUID'
  | 'CONSTRAINED';

export type IImagePlaceholder = 
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BASE64'
  | 'NONE';

export type IImageSharp = INode & {
  fixed?: Maybe<IImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<IImageSharpResolutions>;
  fluid?: Maybe<IImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<IImageSharpSizes>;
  gatsbyImage?: Maybe<IImageSharpGatsbyImage>;
  original?: Maybe<IImageSharpOriginal>;
  resize?: Maybe<IImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type IImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type IImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type IImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type IImageSharpGatsbyImageArgs = {
  layout?: Maybe<IImageLayout>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<IImagePlaceholder>;
  tracedSVGOptions?: Maybe<IPotrace>;
  webP?: Maybe<Scalars['Boolean']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<IDuotoneGradient>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type IImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<IDuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<IPotrace>;
  toFormat?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type IImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IImageSharpEdge>;
  nodes: Array<IImageSharp>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IImageSharpGroupConnection>;
};


export type IImageSharpConnectionDistinctArgs = {
  field: IImageSharpFieldsEnum;
};


export type IImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IImageSharpFieldsEnum;
};

export type IImageSharpEdge = {
  next?: Maybe<IImageSharp>;
  node: IImageSharp;
  previous?: Maybe<IImageSharp>;
};

export type IImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImage___imageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type IImageSharpFilterInput = {
  fixed?: Maybe<IImageSharpFixedFilterInput>;
  resolutions?: Maybe<IImageSharpResolutionsFilterInput>;
  fluid?: Maybe<IImageSharpFluidFilterInput>;
  sizes?: Maybe<IImageSharpSizesFilterInput>;
  gatsbyImage?: Maybe<IImageSharpGatsbyImageFilterInput>;
  original?: Maybe<IImageSharpOriginalFilterInput>;
  resize?: Maybe<IImageSharpResizeFilterInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type IImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type IImageSharpFixedFilterInput = {
  base64?: Maybe<IStringQueryOperatorInput>;
  tracedSVG?: Maybe<IStringQueryOperatorInput>;
  aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  width?: Maybe<IFloatQueryOperatorInput>;
  height?: Maybe<IFloatQueryOperatorInput>;
  src?: Maybe<IStringQueryOperatorInput>;
  srcSet?: Maybe<IStringQueryOperatorInput>;
  srcWebp?: Maybe<IStringQueryOperatorInput>;
  srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  originalName?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type IImageSharpFluidFilterInput = {
  base64?: Maybe<IStringQueryOperatorInput>;
  tracedSVG?: Maybe<IStringQueryOperatorInput>;
  aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  src?: Maybe<IStringQueryOperatorInput>;
  srcSet?: Maybe<IStringQueryOperatorInput>;
  srcWebp?: Maybe<IStringQueryOperatorInput>;
  srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  sizes?: Maybe<IStringQueryOperatorInput>;
  originalImg?: Maybe<IStringQueryOperatorInput>;
  originalName?: Maybe<IStringQueryOperatorInput>;
  presentationWidth?: Maybe<IIntQueryOperatorInput>;
  presentationHeight?: Maybe<IIntQueryOperatorInput>;
};

export type IImageSharpGatsbyImage = {
  imageData: Scalars['JSON'];
};

export type IImageSharpGatsbyImageFilterInput = {
  imageData?: Maybe<IJsonQueryOperatorInput>;
};

export type IImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IImageSharpEdge>;
  nodes: Array<IImageSharp>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type IImageSharpOriginalFilterInput = {
  width?: Maybe<IFloatQueryOperatorInput>;
  height?: Maybe<IFloatQueryOperatorInput>;
  src?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type IImageSharpResizeFilterInput = {
  src?: Maybe<IStringQueryOperatorInput>;
  tracedSVG?: Maybe<IStringQueryOperatorInput>;
  width?: Maybe<IIntQueryOperatorInput>;
  height?: Maybe<IIntQueryOperatorInput>;
  aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  originalName?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type IImageSharpResolutionsFilterInput = {
  base64?: Maybe<IStringQueryOperatorInput>;
  tracedSVG?: Maybe<IStringQueryOperatorInput>;
  aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  width?: Maybe<IFloatQueryOperatorInput>;
  height?: Maybe<IFloatQueryOperatorInput>;
  src?: Maybe<IStringQueryOperatorInput>;
  srcSet?: Maybe<IStringQueryOperatorInput>;
  srcWebp?: Maybe<IStringQueryOperatorInput>;
  srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  originalName?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type IImageSharpSizesFilterInput = {
  base64?: Maybe<IStringQueryOperatorInput>;
  tracedSVG?: Maybe<IStringQueryOperatorInput>;
  aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  src?: Maybe<IStringQueryOperatorInput>;
  srcSet?: Maybe<IStringQueryOperatorInput>;
  srcWebp?: Maybe<IStringQueryOperatorInput>;
  srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  sizes?: Maybe<IStringQueryOperatorInput>;
  originalImg?: Maybe<IStringQueryOperatorInput>;
  originalName?: Maybe<IStringQueryOperatorInput>;
  presentationWidth?: Maybe<IIntQueryOperatorInput>;
  presentationHeight?: Maybe<IIntQueryOperatorInput>;
};

export type IImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<IImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IInternal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type IInternalFilterInput = {
  content?: Maybe<IStringQueryOperatorInput>;
  contentDigest?: Maybe<IStringQueryOperatorInput>;
  description?: Maybe<IStringQueryOperatorInput>;
  fieldOwners?: Maybe<IStringQueryOperatorInput>;
  ignoreType?: Maybe<IBooleanQueryOperatorInput>;
  mediaType?: Maybe<IStringQueryOperatorInput>;
  owner?: Maybe<IStringQueryOperatorInput>;
  type?: Maybe<IStringQueryOperatorInput>;
};

export type IIntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type IJsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type IMeasure = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['String']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<IMeasurePath>;
  description?: Maybe<IMeasureDescription>;
  meta_description?: Maybe<Scalars['String']>;
  norm?: Maybe<Scalars['String']>;
  source?: Maybe<IMeasureSource>;
  valid_from?: Maybe<Scalars['Date']>;
  valid_to?: Maybe<Scalars['Date']>;
  relationships?: Maybe<IMeasureRelationships>;
};


export type IMeasureCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IMeasureChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IMeasureValid_FromArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IMeasureValid_ToArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IMeasure_Type = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__tid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  path?: Maybe<IMeasure_TypePath>;
  relationships?: Maybe<IMeasure_TypeRelationships>;
};

export type IMeasure_TypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IMeasure_TypeEdge>;
  nodes: Array<IMeasure_Type>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IMeasure_TypeGroupConnection>;
};


export type IMeasure_TypeConnectionDistinctArgs = {
  field: IMeasure_TypeFieldsEnum;
};


export type IMeasure_TypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IMeasure_TypeFieldsEnum;
};

export type IMeasure_TypeEdge = {
  next?: Maybe<IMeasure_Type>;
  node: IMeasure_Type;
  previous?: Maybe<IMeasure_Type>;
};

export type IMeasure_TypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__tid'
  | 'langcode'
  | 'status'
  | 'name'
  | 'weight'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'relationships___measure'
  | 'relationships___measure___id'
  | 'relationships___measure___parent___id'
  | 'relationships___measure___parent___children'
  | 'relationships___measure___children'
  | 'relationships___measure___children___id'
  | 'relationships___measure___children___children'
  | 'relationships___measure___internal___content'
  | 'relationships___measure___internal___contentDigest'
  | 'relationships___measure___internal___description'
  | 'relationships___measure___internal___fieldOwners'
  | 'relationships___measure___internal___ignoreType'
  | 'relationships___measure___internal___mediaType'
  | 'relationships___measure___internal___owner'
  | 'relationships___measure___internal___type'
  | 'relationships___measure___drupal_id'
  | 'relationships___measure___drupal_internal__nid'
  | 'relationships___measure___langcode'
  | 'relationships___measure___status'
  | 'relationships___measure___title'
  | 'relationships___measure___created'
  | 'relationships___measure___changed'
  | 'relationships___measure___promote'
  | 'relationships___measure___sticky'
  | 'relationships___measure___moderation_state'
  | 'relationships___measure___path___alias'
  | 'relationships___measure___path___pid'
  | 'relationships___measure___path___langcode'
  | 'relationships___measure___description___value'
  | 'relationships___measure___description___format'
  | 'relationships___measure___description___processed'
  | 'relationships___measure___meta_description'
  | 'relationships___measure___norm'
  | 'relationships___measure___source___uri'
  | 'relationships___measure___source___title'
  | 'relationships___measure___valid_from'
  | 'relationships___measure___valid_to'
  | 'relationships___measure___relationships___homepage'
  | 'relationships___measure___relationships___region'
  | 'relationships___measure___relationships___situation'
  | 'relationships___icon___id'
  | 'relationships___icon___parent___id'
  | 'relationships___icon___parent___children'
  | 'relationships___icon___children'
  | 'relationships___icon___children___id'
  | 'relationships___icon___children___children'
  | 'relationships___icon___internal___content'
  | 'relationships___icon___internal___contentDigest'
  | 'relationships___icon___internal___description'
  | 'relationships___icon___internal___fieldOwners'
  | 'relationships___icon___internal___ignoreType'
  | 'relationships___icon___internal___mediaType'
  | 'relationships___icon___internal___owner'
  | 'relationships___icon___internal___type'
  | 'relationships___icon___drupal_id'
  | 'relationships___icon___langcode'
  | 'relationships___icon___path___langcode'
  | 'relationships___icon___code'
  | 'relationships___icon___source'
  | 'relationships___icon___relationships___situation'
  | 'relationships___icon___relationships___area'
  | 'relationships___icon___relationships___measure_type'
  | 'relationships___icon___relationships___measure';

export type IMeasure_TypeFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  weight?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IMeasure_TypePathFilterInput>;
  relationships?: Maybe<IMeasure_TypeRelationshipsFilterInput>;
};

export type IMeasure_TypeFilterListInput = {
  elemMatch?: Maybe<IMeasure_TypeFilterInput>;
};

export type IMeasure_TypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IMeasure_TypeEdge>;
  nodes: Array<IMeasure_Type>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IMeasure_TypePath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
};

export type IMeasure_TypePathFilterInput = {
  alias?: Maybe<IStringQueryOperatorInput>;
  pid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IMeasure_TypeRelationships = {
  measure?: Maybe<Array<Maybe<IMeasure>>>;
  icon?: Maybe<IIcons>;
};

export type IMeasure_TypeRelationshipsFilterInput = {
  measure?: Maybe<IMeasureFilterListInput>;
  icon?: Maybe<IIconsFilterInput>;
};

export type IMeasure_TypeSortInput = {
  fields?: Maybe<Array<Maybe<IMeasure_TypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IMeasureConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IMeasureEdge>;
  nodes: Array<IMeasure>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IMeasureGroupConnection>;
};


export type IMeasureConnectionDistinctArgs = {
  field: IMeasureFieldsEnum;
};


export type IMeasureConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IMeasureFieldsEnum;
};

export type IMeasureDescription = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type IMeasureDescriptionFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  format?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
};

export type IMeasureEdge = {
  next?: Maybe<IMeasure>;
  node: IMeasure;
  previous?: Maybe<IMeasure>;
};

export type IMeasureFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'langcode'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'moderation_state'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'description___value'
  | 'description___format'
  | 'description___processed'
  | 'meta_description'
  | 'norm'
  | 'source___uri'
  | 'source___title'
  | 'valid_from'
  | 'valid_to'
  | 'relationships___homepage'
  | 'relationships___homepage___id'
  | 'relationships___homepage___parent___id'
  | 'relationships___homepage___parent___children'
  | 'relationships___homepage___children'
  | 'relationships___homepage___children___id'
  | 'relationships___homepage___children___children'
  | 'relationships___homepage___internal___content'
  | 'relationships___homepage___internal___contentDigest'
  | 'relationships___homepage___internal___description'
  | 'relationships___homepage___internal___fieldOwners'
  | 'relationships___homepage___internal___ignoreType'
  | 'relationships___homepage___internal___mediaType'
  | 'relationships___homepage___internal___owner'
  | 'relationships___homepage___internal___type'
  | 'relationships___homepage___drupal_id'
  | 'relationships___homepage___drupal_internal__nid'
  | 'relationships___homepage___langcode'
  | 'relationships___homepage___status'
  | 'relationships___homepage___title'
  | 'relationships___homepage___created'
  | 'relationships___homepage___changed'
  | 'relationships___homepage___promote'
  | 'relationships___homepage___sticky'
  | 'relationships___homepage___moderation_state'
  | 'relationships___homepage___path___langcode'
  | 'relationships___homepage___measure_label___value'
  | 'relationships___homepage___measure_label___format'
  | 'relationships___homepage___measure_label___processed'
  | 'relationships___homepage___situation_label___value'
  | 'relationships___homepage___situation_label___format'
  | 'relationships___homepage___situation_label___processed'
  | 'relationships___homepage___measure_description'
  | 'relationships___homepage___measure_link___uri'
  | 'relationships___homepage___measure_link___title'
  | 'relationships___homepage___measure_text'
  | 'relationships___homepage___situation_description'
  | 'relationships___homepage___situation_link___uri'
  | 'relationships___homepage___situation_link___title'
  | 'relationships___homepage___situation_text'
  | 'relationships___homepage___meta_description'
  | 'relationships___homepage___relationships___situation_items'
  | 'relationships___homepage___relationships___measure_items'
  | 'relationships___measure_type___id'
  | 'relationships___measure_type___parent___id'
  | 'relationships___measure_type___parent___children'
  | 'relationships___measure_type___children'
  | 'relationships___measure_type___children___id'
  | 'relationships___measure_type___children___children'
  | 'relationships___measure_type___internal___content'
  | 'relationships___measure_type___internal___contentDigest'
  | 'relationships___measure_type___internal___description'
  | 'relationships___measure_type___internal___fieldOwners'
  | 'relationships___measure_type___internal___ignoreType'
  | 'relationships___measure_type___internal___mediaType'
  | 'relationships___measure_type___internal___owner'
  | 'relationships___measure_type___internal___type'
  | 'relationships___measure_type___drupal_id'
  | 'relationships___measure_type___drupal_internal__tid'
  | 'relationships___measure_type___langcode'
  | 'relationships___measure_type___status'
  | 'relationships___measure_type___name'
  | 'relationships___measure_type___weight'
  | 'relationships___measure_type___path___alias'
  | 'relationships___measure_type___path___pid'
  | 'relationships___measure_type___path___langcode'
  | 'relationships___measure_type___relationships___measure'
  | 'relationships___region'
  | 'relationships___region___id'
  | 'relationships___region___parent___id'
  | 'relationships___region___parent___children'
  | 'relationships___region___children'
  | 'relationships___region___children___id'
  | 'relationships___region___children___children'
  | 'relationships___region___internal___content'
  | 'relationships___region___internal___contentDigest'
  | 'relationships___region___internal___description'
  | 'relationships___region___internal___fieldOwners'
  | 'relationships___region___internal___ignoreType'
  | 'relationships___region___internal___mediaType'
  | 'relationships___region___internal___owner'
  | 'relationships___region___internal___type'
  | 'relationships___region___drupal_id'
  | 'relationships___region___drupal_internal__tid'
  | 'relationships___region___langcode'
  | 'relationships___region___status'
  | 'relationships___region___name'
  | 'relationships___region___weight'
  | 'relationships___region___changed'
  | 'relationships___region___path___langcode'
  | 'relationships___region___relationships___measure'
  | 'relationships___region___relationships___situation'
  | 'relationships___situation'
  | 'relationships___situation___id'
  | 'relationships___situation___parent___id'
  | 'relationships___situation___parent___children'
  | 'relationships___situation___children'
  | 'relationships___situation___children___id'
  | 'relationships___situation___children___children'
  | 'relationships___situation___internal___content'
  | 'relationships___situation___internal___contentDigest'
  | 'relationships___situation___internal___description'
  | 'relationships___situation___internal___fieldOwners'
  | 'relationships___situation___internal___ignoreType'
  | 'relationships___situation___internal___mediaType'
  | 'relationships___situation___internal___owner'
  | 'relationships___situation___internal___type'
  | 'relationships___situation___drupal_id'
  | 'relationships___situation___drupal_internal__nid'
  | 'relationships___situation___langcode'
  | 'relationships___situation___status'
  | 'relationships___situation___title'
  | 'relationships___situation___created'
  | 'relationships___situation___changed'
  | 'relationships___situation___promote'
  | 'relationships___situation___sticky'
  | 'relationships___situation___moderation_state'
  | 'relationships___situation___path___alias'
  | 'relationships___situation___path___pid'
  | 'relationships___situation___path___langcode'
  | 'relationships___situation___meta_description'
  | 'relationships___situation___questions_answers'
  | 'relationships___situation___questions_answers___value'
  | 'relationships___situation___questions_answers___processed'
  | 'relationships___situation___questions_answers___question'
  | 'relationships___situation___links'
  | 'relationships___situation___links___uri'
  | 'relationships___situation___links___title'
  | 'relationships___situation___valid_from'
  | 'relationships___situation___valid_to'
  | 'relationships___situation___content___value'
  | 'relationships___situation___content___format'
  | 'relationships___situation___content___processed'
  | 'relationships___situation___relationships___region'
  | 'relationships___situation___relationships___measures'
  | 'relationships___situation___relationships___related_situations'
  | 'relationships___situation___relationships___situation'
  | 'relationships___situation___related_situations'
  | 'relationships___situation___related_situations___arity'
  | 'relationships___icon___id'
  | 'relationships___icon___parent___id'
  | 'relationships___icon___parent___children'
  | 'relationships___icon___children'
  | 'relationships___icon___children___id'
  | 'relationships___icon___children___children'
  | 'relationships___icon___internal___content'
  | 'relationships___icon___internal___contentDigest'
  | 'relationships___icon___internal___description'
  | 'relationships___icon___internal___fieldOwners'
  | 'relationships___icon___internal___ignoreType'
  | 'relationships___icon___internal___mediaType'
  | 'relationships___icon___internal___owner'
  | 'relationships___icon___internal___type'
  | 'relationships___icon___drupal_id'
  | 'relationships___icon___langcode'
  | 'relationships___icon___path___langcode'
  | 'relationships___icon___code'
  | 'relationships___icon___source'
  | 'relationships___icon___relationships___situation'
  | 'relationships___icon___relationships___area'
  | 'relationships___icon___relationships___measure_type'
  | 'relationships___icon___relationships___measure';

export type IMeasureFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IMeasurePathFilterInput>;
  description?: Maybe<IMeasureDescriptionFilterInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
  norm?: Maybe<IStringQueryOperatorInput>;
  source?: Maybe<IMeasureSourceFilterInput>;
  valid_from?: Maybe<IDateQueryOperatorInput>;
  valid_to?: Maybe<IDateQueryOperatorInput>;
  relationships?: Maybe<IMeasureRelationshipsFilterInput>;
};

export type IMeasureFilterListInput = {
  elemMatch?: Maybe<IMeasureFilterInput>;
};

export type IMeasureGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IMeasureEdge>;
  nodes: Array<IMeasure>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IMeasurePath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
};

export type IMeasurePathFilterInput = {
  alias?: Maybe<IStringQueryOperatorInput>;
  pid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IMeasureRelationships = {
  homepage?: Maybe<Array<Maybe<IHomepage>>>;
  measure_type?: Maybe<IMeasure_Type>;
  region?: Maybe<Array<Maybe<IRegion>>>;
  situation?: Maybe<Array<Maybe<ISituation>>>;
  icon?: Maybe<IIcons>;
};

export type IMeasureRelationshipsFilterInput = {
  homepage?: Maybe<IHomepageFilterListInput>;
  measure_type?: Maybe<IMeasure_TypeFilterInput>;
  region?: Maybe<IRegionFilterListInput>;
  situation?: Maybe<ISituationFilterListInput>;
  icon?: Maybe<IIconsFilterInput>;
};

export type IMeasureSortInput = {
  fields?: Maybe<Array<Maybe<IMeasureFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IMeasureSource = {
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IMeasureSourceFilterInput = {
  uri?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
};

/** Node Interface */
export type INode = {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};

export type INodeFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type INodeFilterListInput = {
  elemMatch?: Maybe<INodeFilterInput>;
};

export type IPage = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['String']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<IPagePath>;
  content?: Maybe<IPageContent>;
  meta_description?: Maybe<Scalars['String']>;
};


export type IPageCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type IPageChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IPageEdge>;
  nodes: Array<IPage>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IPageGroupConnection>;
};


export type IPageConnectionDistinctArgs = {
  field: IPageFieldsEnum;
};


export type IPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IPageFieldsEnum;
};

export type IPageContent = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type IPageContentFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  format?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
};

export type IPageEdge = {
  next?: Maybe<IPage>;
  node: IPage;
  previous?: Maybe<IPage>;
};

export type IPageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'langcode'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'moderation_state'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'content___value'
  | 'content___format'
  | 'content___processed'
  | 'meta_description';

export type IPageFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IPagePathFilterInput>;
  content?: Maybe<IPageContentFilterInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
};

export type IPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IPageEdge>;
  nodes: Array<IPage>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IPageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type IPagePath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
};

export type IPagePathFilterInput = {
  alias?: Maybe<IStringQueryOperatorInput>;
  pid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IPageSortInput = {
  fields?: Maybe<Array<Maybe<IPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IPotrace = {
  turnPolicy?: Maybe<IPotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type IPotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type IQuery = {
  file?: Maybe<IFile>;
  allFile: IFileConnection;
  directory?: Maybe<IDirectory>;
  allDirectory: IDirectoryConnection;
  site?: Maybe<ISite>;
  allSite: ISiteConnection;
  sitePage?: Maybe<ISitePage>;
  allSitePage: ISitePageConnection;
  imageSharp?: Maybe<IImageSharp>;
  allImageSharp: IImageSharpConnection;
  seo?: Maybe<ISeo>;
  allSeo: ISeoConnection;
  translation?: Maybe<ITranslation>;
  allTranslation: ITranslationConnection;
  situation?: Maybe<ISituation>;
  allSituation: ISituationConnection;
  region?: Maybe<IRegion>;
  allRegion: IRegionConnection;
  page?: Maybe<IPage>;
  allPage: IPageConnection;
  measureType?: Maybe<IMeasure_Type>;
  allMeasureType: IMeasure_TypeConnection;
  measure?: Maybe<IMeasure>;
  allMeasure: IMeasureConnection;
  icons?: Maybe<IIcons>;
  allIcons: IIconsConnection;
  homepage?: Maybe<IHomepage>;
  allHomepage: IHomepageConnection;
  drupalFile?: Maybe<IDrupal_File>;
  allDrupalFile: IDrupal_FileConnection;
  blocks?: Maybe<IBlocks>;
  allBlocks: IBlocksConnection;
  area?: Maybe<IArea>;
  allArea: IAreaConnection;
  siteBuildMetadata?: Maybe<ISiteBuildMetadata>;
  allSiteBuildMetadata: ISiteBuildMetadataConnection;
  sitePlugin?: Maybe<ISitePlugin>;
  allSitePlugin: ISitePluginConnection;
};


export type IQueryFileArgs = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  absolutePath?: Maybe<IStringQueryOperatorInput>;
  relativePath?: Maybe<IStringQueryOperatorInput>;
  extension?: Maybe<IStringQueryOperatorInput>;
  size?: Maybe<IIntQueryOperatorInput>;
  prettySize?: Maybe<IStringQueryOperatorInput>;
  modifiedTime?: Maybe<IDateQueryOperatorInput>;
  accessTime?: Maybe<IDateQueryOperatorInput>;
  changeTime?: Maybe<IDateQueryOperatorInput>;
  birthTime?: Maybe<IDateQueryOperatorInput>;
  root?: Maybe<IStringQueryOperatorInput>;
  dir?: Maybe<IStringQueryOperatorInput>;
  base?: Maybe<IStringQueryOperatorInput>;
  ext?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  dev?: Maybe<IIntQueryOperatorInput>;
  mode?: Maybe<IIntQueryOperatorInput>;
  nlink?: Maybe<IIntQueryOperatorInput>;
  uid?: Maybe<IIntQueryOperatorInput>;
  gid?: Maybe<IIntQueryOperatorInput>;
  rdev?: Maybe<IIntQueryOperatorInput>;
  ino?: Maybe<IFloatQueryOperatorInput>;
  atimeMs?: Maybe<IFloatQueryOperatorInput>;
  mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  atime?: Maybe<IDateQueryOperatorInput>;
  mtime?: Maybe<IDateQueryOperatorInput>;
  ctime?: Maybe<IDateQueryOperatorInput>;
  birthtime?: Maybe<IDateQueryOperatorInput>;
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  blksize?: Maybe<IIntQueryOperatorInput>;
  blocks?: Maybe<IIntQueryOperatorInput>;
  publicURL?: Maybe<IStringQueryOperatorInput>;
  childImageSharp?: Maybe<IImageSharpFilterInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};


export type IQueryAllFileArgs = {
  filter?: Maybe<IFileFilterInput>;
  sort?: Maybe<IFileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryDirectoryArgs = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  absolutePath?: Maybe<IStringQueryOperatorInput>;
  relativePath?: Maybe<IStringQueryOperatorInput>;
  extension?: Maybe<IStringQueryOperatorInput>;
  size?: Maybe<IIntQueryOperatorInput>;
  prettySize?: Maybe<IStringQueryOperatorInput>;
  modifiedTime?: Maybe<IDateQueryOperatorInput>;
  accessTime?: Maybe<IDateQueryOperatorInput>;
  changeTime?: Maybe<IDateQueryOperatorInput>;
  birthTime?: Maybe<IDateQueryOperatorInput>;
  root?: Maybe<IStringQueryOperatorInput>;
  dir?: Maybe<IStringQueryOperatorInput>;
  base?: Maybe<IStringQueryOperatorInput>;
  ext?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  dev?: Maybe<IIntQueryOperatorInput>;
  mode?: Maybe<IIntQueryOperatorInput>;
  nlink?: Maybe<IIntQueryOperatorInput>;
  uid?: Maybe<IIntQueryOperatorInput>;
  gid?: Maybe<IIntQueryOperatorInput>;
  rdev?: Maybe<IIntQueryOperatorInput>;
  ino?: Maybe<IFloatQueryOperatorInput>;
  atimeMs?: Maybe<IFloatQueryOperatorInput>;
  mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  atime?: Maybe<IDateQueryOperatorInput>;
  mtime?: Maybe<IDateQueryOperatorInput>;
  ctime?: Maybe<IDateQueryOperatorInput>;
  birthtime?: Maybe<IDateQueryOperatorInput>;
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  blksize?: Maybe<IIntQueryOperatorInput>;
  blocks?: Maybe<IIntQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};


export type IQueryAllDirectoryArgs = {
  filter?: Maybe<IDirectoryFilterInput>;
  sort?: Maybe<IDirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQuerySiteArgs = {
  buildTime?: Maybe<IDateQueryOperatorInput>;
  siteMetadata?: Maybe<ISiteSiteMetadataFilterInput>;
  port?: Maybe<IIntQueryOperatorInput>;
  host?: Maybe<IStringQueryOperatorInput>;
  polyfill?: Maybe<IBooleanQueryOperatorInput>;
  pathPrefix?: Maybe<IStringQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};


export type IQueryAllSiteArgs = {
  filter?: Maybe<ISiteFilterInput>;
  sort?: Maybe<ISiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQuerySitePageArgs = {
  path?: Maybe<IStringQueryOperatorInput>;
  component?: Maybe<IStringQueryOperatorInput>;
  internalComponentName?: Maybe<IStringQueryOperatorInput>;
  componentChunkName?: Maybe<IStringQueryOperatorInput>;
  matchPath?: Maybe<IStringQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<IBooleanQueryOperatorInput>;
  context?: Maybe<ISitePageContextFilterInput>;
  pluginCreator?: Maybe<ISitePluginFilterInput>;
  pluginCreatorId?: Maybe<IStringQueryOperatorInput>;
  componentPath?: Maybe<IStringQueryOperatorInput>;
};


export type IQueryAllSitePageArgs = {
  filter?: Maybe<ISitePageFilterInput>;
  sort?: Maybe<ISitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryImageSharpArgs = {
  fixed?: Maybe<IImageSharpFixedFilterInput>;
  resolutions?: Maybe<IImageSharpResolutionsFilterInput>;
  fluid?: Maybe<IImageSharpFluidFilterInput>;
  sizes?: Maybe<IImageSharpSizesFilterInput>;
  gatsbyImage?: Maybe<IImageSharpGatsbyImageFilterInput>;
  original?: Maybe<IImageSharpOriginalFilterInput>;
  resize?: Maybe<IImageSharpResizeFilterInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};


export type IQueryAllImageSharpArgs = {
  filter?: Maybe<IImageSharpFilterInput>;
  sort?: Maybe<IImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQuerySeoArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  siteName?: Maybe<IStringQueryOperatorInput>;
  defaultSiteImage?: Maybe<IStringQueryOperatorInput>;
  locale?: Maybe<IStringQueryOperatorInput>;
  twitterCreator?: Maybe<IStringQueryOperatorInput>;
  twitterSite?: Maybe<IStringQueryOperatorInput>;
  globalSchema?: Maybe<IStringQueryOperatorInput>;
  htmlLanguage?: Maybe<IStringQueryOperatorInput>;
  defaultAuthorUrl?: Maybe<IStringQueryOperatorInput>;
  defaultPublisherUrl?: Maybe<IStringQueryOperatorInput>;
  siteUrl?: Maybe<IStringQueryOperatorInput>;
  appleTouch?: Maybe<IStringQueryOperatorInput>;
  favicon16?: Maybe<IStringQueryOperatorInput>;
  favicon32?: Maybe<IStringQueryOperatorInput>;
};


export type IQueryAllSeoArgs = {
  filter?: Maybe<ISeoFilterInput>;
  sort?: Maybe<ISeoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryTranslationArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  source?: Maybe<IStringQueryOperatorInput>;
  target?: Maybe<IStringQueryOperatorInput>;
};


export type IQueryAllTranslationArgs = {
  filter?: Maybe<ITranslationFilterInput>;
  sort?: Maybe<ITranslationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQuerySituationArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<ISituationPathFilterInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
  questions_answers?: Maybe<ISituationQuestions_AnswersFilterListInput>;
  links?: Maybe<ISituationLinksFilterListInput>;
  valid_from?: Maybe<IDateQueryOperatorInput>;
  valid_to?: Maybe<IDateQueryOperatorInput>;
  content?: Maybe<ISituationContentFilterInput>;
  relationships?: Maybe<ISituationRelationshipsFilterInput>;
  related_situations?: Maybe<ISituationRelated_SituationsFilterListInput>;
};


export type IQueryAllSituationArgs = {
  filter?: Maybe<ISituationFilterInput>;
  sort?: Maybe<ISituationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryRegionArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  weight?: Maybe<IStringQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  path?: Maybe<IRegionPathFilterInput>;
  relationships?: Maybe<IRegionRelationshipsFilterInput>;
};


export type IQueryAllRegionArgs = {
  filter?: Maybe<IRegionFilterInput>;
  sort?: Maybe<IRegionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryPageArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IPagePathFilterInput>;
  content?: Maybe<IPageContentFilterInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
};


export type IQueryAllPageArgs = {
  filter?: Maybe<IPageFilterInput>;
  sort?: Maybe<IPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryMeasureTypeArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  weight?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IMeasure_TypePathFilterInput>;
  relationships?: Maybe<IMeasure_TypeRelationshipsFilterInput>;
};


export type IQueryAllMeasureTypeArgs = {
  filter?: Maybe<IMeasure_TypeFilterInput>;
  sort?: Maybe<IMeasure_TypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryMeasureArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IMeasurePathFilterInput>;
  description?: Maybe<IMeasureDescriptionFilterInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
  norm?: Maybe<IStringQueryOperatorInput>;
  source?: Maybe<IMeasureSourceFilterInput>;
  valid_from?: Maybe<IDateQueryOperatorInput>;
  valid_to?: Maybe<IDateQueryOperatorInput>;
  relationships?: Maybe<IMeasureRelationshipsFilterInput>;
};


export type IQueryAllMeasureArgs = {
  filter?: Maybe<IMeasureFilterInput>;
  sort?: Maybe<IMeasureSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryIconsArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IIconsPathFilterInput>;
  code?: Maybe<IStringQueryOperatorInput>;
  source?: Maybe<IStringQueryOperatorInput>;
  relationships?: Maybe<IIconsRelationshipsFilterInput>;
};


export type IQueryAllIconsArgs = {
  filter?: Maybe<IIconsFilterInput>;
  sort?: Maybe<IIconsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryHomepageArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IHomepagePathFilterInput>;
  measure_label?: Maybe<IHomepageMeasure_LabelFilterInput>;
  situation_label?: Maybe<IHomepageSituation_LabelFilterInput>;
  measure_description?: Maybe<IStringQueryOperatorInput>;
  measure_link?: Maybe<IHomepageMeasure_LinkFilterInput>;
  measure_text?: Maybe<IStringQueryOperatorInput>;
  situation_description?: Maybe<IStringQueryOperatorInput>;
  situation_link?: Maybe<IHomepageSituation_LinkFilterInput>;
  situation_text?: Maybe<IStringQueryOperatorInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
  relationships?: Maybe<IHomepageRelationshipsFilterInput>;
};


export type IQueryAllHomepageArgs = {
  filter?: Maybe<IHomepageFilterInput>;
  sort?: Maybe<IHomepageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryDrupalFileArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__fid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  filename?: Maybe<IStringQueryOperatorInput>;
  uri?: Maybe<IDrupal_FileUriFilterInput>;
  filemime?: Maybe<IStringQueryOperatorInput>;
  filesize?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
};


export type IQueryAllDrupalFileArgs = {
  filter?: Maybe<IDrupal_FileFilterInput>;
  sort?: Maybe<IDrupal_FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryBlocksArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  info?: Maybe<IStringQueryOperatorInput>;
  content?: Maybe<IBlocksContentFilterInput>;
};


export type IQueryAllBlocksArgs = {
  filter?: Maybe<IBlocksFilterInput>;
  sort?: Maybe<IBlocksSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQueryAreaArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  weight?: Maybe<IStringQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  path?: Maybe<IAreaPathFilterInput>;
  relationships?: Maybe<IAreaRelationshipsFilterInput>;
};


export type IQueryAllAreaArgs = {
  filter?: Maybe<IAreaFilterInput>;
  sort?: Maybe<IAreaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQuerySiteBuildMetadataArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  buildTime?: Maybe<IDateQueryOperatorInput>;
};


export type IQueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<ISiteBuildMetadataFilterInput>;
  sort?: Maybe<ISiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type IQuerySitePluginArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  resolve?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
  pluginOptions?: Maybe<ISitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<IStringQueryOperatorInput>;
  browserAPIs?: Maybe<IStringQueryOperatorInput>;
  ssrAPIs?: Maybe<IStringQueryOperatorInput>;
  pluginFilepath?: Maybe<IStringQueryOperatorInput>;
  packageJson?: Maybe<ISitePluginPackageJsonFilterInput>;
};


export type IQueryAllSitePluginArgs = {
  filter?: Maybe<ISitePluginFilterInput>;
  sort?: Maybe<ISitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IRegion = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__tid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  changed?: Maybe<Scalars['Date']>;
  path?: Maybe<IRegionPath>;
  relationships?: Maybe<IRegionRelationships>;
};


export type IRegionChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IRegionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IRegionEdge>;
  nodes: Array<IRegion>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IRegionGroupConnection>;
};


export type IRegionConnectionDistinctArgs = {
  field: IRegionFieldsEnum;
};


export type IRegionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IRegionFieldsEnum;
};

export type IRegionEdge = {
  next?: Maybe<IRegion>;
  node: IRegion;
  previous?: Maybe<IRegion>;
};

export type IRegionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__tid'
  | 'langcode'
  | 'status'
  | 'name'
  | 'weight'
  | 'changed'
  | 'path___langcode'
  | 'relationships___measure'
  | 'relationships___measure___id'
  | 'relationships___measure___parent___id'
  | 'relationships___measure___parent___children'
  | 'relationships___measure___children'
  | 'relationships___measure___children___id'
  | 'relationships___measure___children___children'
  | 'relationships___measure___internal___content'
  | 'relationships___measure___internal___contentDigest'
  | 'relationships___measure___internal___description'
  | 'relationships___measure___internal___fieldOwners'
  | 'relationships___measure___internal___ignoreType'
  | 'relationships___measure___internal___mediaType'
  | 'relationships___measure___internal___owner'
  | 'relationships___measure___internal___type'
  | 'relationships___measure___drupal_id'
  | 'relationships___measure___drupal_internal__nid'
  | 'relationships___measure___langcode'
  | 'relationships___measure___status'
  | 'relationships___measure___title'
  | 'relationships___measure___created'
  | 'relationships___measure___changed'
  | 'relationships___measure___promote'
  | 'relationships___measure___sticky'
  | 'relationships___measure___moderation_state'
  | 'relationships___measure___path___alias'
  | 'relationships___measure___path___pid'
  | 'relationships___measure___path___langcode'
  | 'relationships___measure___description___value'
  | 'relationships___measure___description___format'
  | 'relationships___measure___description___processed'
  | 'relationships___measure___meta_description'
  | 'relationships___measure___norm'
  | 'relationships___measure___source___uri'
  | 'relationships___measure___source___title'
  | 'relationships___measure___valid_from'
  | 'relationships___measure___valid_to'
  | 'relationships___measure___relationships___homepage'
  | 'relationships___measure___relationships___region'
  | 'relationships___measure___relationships___situation'
  | 'relationships___situation'
  | 'relationships___situation___id'
  | 'relationships___situation___parent___id'
  | 'relationships___situation___parent___children'
  | 'relationships___situation___children'
  | 'relationships___situation___children___id'
  | 'relationships___situation___children___children'
  | 'relationships___situation___internal___content'
  | 'relationships___situation___internal___contentDigest'
  | 'relationships___situation___internal___description'
  | 'relationships___situation___internal___fieldOwners'
  | 'relationships___situation___internal___ignoreType'
  | 'relationships___situation___internal___mediaType'
  | 'relationships___situation___internal___owner'
  | 'relationships___situation___internal___type'
  | 'relationships___situation___drupal_id'
  | 'relationships___situation___drupal_internal__nid'
  | 'relationships___situation___langcode'
  | 'relationships___situation___status'
  | 'relationships___situation___title'
  | 'relationships___situation___created'
  | 'relationships___situation___changed'
  | 'relationships___situation___promote'
  | 'relationships___situation___sticky'
  | 'relationships___situation___moderation_state'
  | 'relationships___situation___path___alias'
  | 'relationships___situation___path___pid'
  | 'relationships___situation___path___langcode'
  | 'relationships___situation___meta_description'
  | 'relationships___situation___questions_answers'
  | 'relationships___situation___questions_answers___value'
  | 'relationships___situation___questions_answers___processed'
  | 'relationships___situation___questions_answers___question'
  | 'relationships___situation___links'
  | 'relationships___situation___links___uri'
  | 'relationships___situation___links___title'
  | 'relationships___situation___valid_from'
  | 'relationships___situation___valid_to'
  | 'relationships___situation___content___value'
  | 'relationships___situation___content___format'
  | 'relationships___situation___content___processed'
  | 'relationships___situation___relationships___region'
  | 'relationships___situation___relationships___measures'
  | 'relationships___situation___relationships___related_situations'
  | 'relationships___situation___relationships___situation'
  | 'relationships___situation___related_situations'
  | 'relationships___situation___related_situations___arity';

export type IRegionFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__tid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  weight?: Maybe<IStringQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  path?: Maybe<IRegionPathFilterInput>;
  relationships?: Maybe<IRegionRelationshipsFilterInput>;
};

export type IRegionFilterListInput = {
  elemMatch?: Maybe<IRegionFilterInput>;
};

export type IRegionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IRegionEdge>;
  nodes: Array<IRegion>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type IRegionPath = {
  langcode?: Maybe<Scalars['String']>;
};

export type IRegionPathFilterInput = {
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type IRegionRelationships = {
  measure?: Maybe<Array<Maybe<IMeasure>>>;
  situation?: Maybe<Array<Maybe<ISituation>>>;
};

export type IRegionRelationshipsFilterInput = {
  measure?: Maybe<IMeasureFilterListInput>;
  situation?: Maybe<ISituationFilterListInput>;
};

export type IRegionSortInput = {
  fields?: Maybe<Array<Maybe<IRegionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISeo = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  siteName?: Maybe<Scalars['String']>;
  defaultSiteImage?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  twitterCreator?: Maybe<Scalars['String']>;
  twitterSite?: Maybe<Scalars['String']>;
  globalSchema?: Maybe<Scalars['String']>;
  htmlLanguage?: Maybe<Scalars['String']>;
  defaultAuthorUrl?: Maybe<Scalars['String']>;
  defaultPublisherUrl?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  appleTouch?: Maybe<Scalars['String']>;
  favicon16?: Maybe<Scalars['String']>;
  favicon32?: Maybe<Scalars['String']>;
};

export type ISeoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISeoEdge>;
  nodes: Array<ISeo>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISeoGroupConnection>;
};


export type ISeoConnectionDistinctArgs = {
  field: ISeoFieldsEnum;
};


export type ISeoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISeoFieldsEnum;
};

export type ISeoEdge = {
  next?: Maybe<ISeo>;
  node: ISeo;
  previous?: Maybe<ISeo>;
};

export type ISeoFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'siteName'
  | 'defaultSiteImage'
  | 'locale'
  | 'twitterCreator'
  | 'twitterSite'
  | 'globalSchema'
  | 'htmlLanguage'
  | 'defaultAuthorUrl'
  | 'defaultPublisherUrl'
  | 'siteUrl'
  | 'appleTouch'
  | 'favicon16'
  | 'favicon32';

export type ISeoFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  siteName?: Maybe<IStringQueryOperatorInput>;
  defaultSiteImage?: Maybe<IStringQueryOperatorInput>;
  locale?: Maybe<IStringQueryOperatorInput>;
  twitterCreator?: Maybe<IStringQueryOperatorInput>;
  twitterSite?: Maybe<IStringQueryOperatorInput>;
  globalSchema?: Maybe<IStringQueryOperatorInput>;
  htmlLanguage?: Maybe<IStringQueryOperatorInput>;
  defaultAuthorUrl?: Maybe<IStringQueryOperatorInput>;
  defaultPublisherUrl?: Maybe<IStringQueryOperatorInput>;
  siteUrl?: Maybe<IStringQueryOperatorInput>;
  appleTouch?: Maybe<IStringQueryOperatorInput>;
  favicon16?: Maybe<IStringQueryOperatorInput>;
  favicon32?: Maybe<IStringQueryOperatorInput>;
};

export type ISeoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISeoEdge>;
  nodes: Array<ISeo>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ISeoSortInput = {
  fields?: Maybe<Array<Maybe<ISeoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISite = INode & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<ISiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type ISiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ISiteBuildMetadata = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type ISiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ISiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteBuildMetadataEdge>;
  nodes: Array<ISiteBuildMetadata>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISiteBuildMetadataGroupConnection>;
};


export type ISiteBuildMetadataConnectionDistinctArgs = {
  field: ISiteBuildMetadataFieldsEnum;
};


export type ISiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISiteBuildMetadataFieldsEnum;
};

export type ISiteBuildMetadataEdge = {
  next?: Maybe<ISiteBuildMetadata>;
  node: ISiteBuildMetadata;
  previous?: Maybe<ISiteBuildMetadata>;
};

export type ISiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type ISiteBuildMetadataFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  buildTime?: Maybe<IDateQueryOperatorInput>;
};

export type ISiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteBuildMetadataEdge>;
  nodes: Array<ISiteBuildMetadata>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ISiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<ISiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteEdge>;
  nodes: Array<ISite>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISiteGroupConnection>;
};


export type ISiteConnectionDistinctArgs = {
  field: ISiteFieldsEnum;
};


export type ISiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISiteFieldsEnum;
};

export type ISiteEdge = {
  next?: Maybe<ISite>;
  node: ISite;
  previous?: Maybe<ISite>;
};

export type ISiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ISiteFilterInput = {
  buildTime?: Maybe<IDateQueryOperatorInput>;
  siteMetadata?: Maybe<ISiteSiteMetadataFilterInput>;
  port?: Maybe<IIntQueryOperatorInput>;
  host?: Maybe<IStringQueryOperatorInput>;
  polyfill?: Maybe<IBooleanQueryOperatorInput>;
  pathPrefix?: Maybe<IStringQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type ISiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteEdge>;
  nodes: Array<ISite>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ISitePage = INode & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<ISitePageContext>;
  pluginCreator?: Maybe<ISitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type ISitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePageEdge>;
  nodes: Array<ISitePage>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISitePageGroupConnection>;
};


export type ISitePageConnectionDistinctArgs = {
  field: ISitePageFieldsEnum;
};


export type ISitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISitePageFieldsEnum;
};

export type ISitePageContext = {
  langCode?: Maybe<Scalars['String']>;
  languageVariants?: Maybe<ISitePageContextLanguageVariants>;
  slug?: Maybe<Scalars['String']>;
};

export type ISitePageContextFilterInput = {
  langCode?: Maybe<IStringQueryOperatorInput>;
  languageVariants?: Maybe<ISitePageContextLanguageVariantsFilterInput>;
  slug?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageContextLanguageVariants = {
  en?: Maybe<Scalars['String']>;
  vi?: Maybe<Scalars['String']>;
  cs?: Maybe<Scalars['String']>;
};

export type ISitePageContextLanguageVariantsFilterInput = {
  en?: Maybe<IStringQueryOperatorInput>;
  vi?: Maybe<IStringQueryOperatorInput>;
  cs?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageEdge = {
  next?: Maybe<ISitePage>;
  node: ISitePage;
  previous?: Maybe<ISitePage>;
};

export type ISitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___langCode'
  | 'context___languageVariants___en'
  | 'context___languageVariants___vi'
  | 'context___languageVariants___cs'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___baseUrl'
  | 'pluginCreator___pluginOptions___apiBase'
  | 'pluginCreator___pluginOptions___translation'
  | 'pluginCreator___pluginOptions___languageConfig___defaultLanguage'
  | 'pluginCreator___pluginOptions___languageConfig___enabledLanguages'
  | 'pluginCreator___pluginOptions___languageConfig___translatableEntities'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___siteName'
  | 'pluginCreator___pluginOptions___defaultSiteImage'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___globalSchema'
  | 'pluginCreator___pluginOptions___appleTouch'
  | 'pluginCreator___pluginOptions___favicon32'
  | 'pluginCreator___pluginOptions___favicon16'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___sitemap'
  | 'pluginCreator___pluginOptions___policy'
  | 'pluginCreator___pluginOptions___policy___userAgent'
  | 'pluginCreator___pluginOptions___policy___allow'
  | 'pluginCreator___pluginOptions___mergeStyleHashes'
  | 'pluginCreator___pluginOptions___directives___script_src'
  | 'pluginCreator___pluginOptions___directives___style_src'
  | 'pluginCreator___pluginOptions___directives___font_src'
  | 'pluginCreator___pluginOptions___directives___img_src'
  | 'pluginCreator___pluginOptions___directives___connect_src'
  | 'pluginCreator___pluginOptions___directives___default_src'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___codegenConfig___typesPrefix'
  | 'pluginCreator___pluginOptions___codegenPlugins'
  | 'pluginCreator___pluginOptions___codegenPlugins___resolve'
  | 'pluginCreator___pluginOptions___whitelist'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___lang'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___icon_options___purpose'
  | 'pluginCreator___pluginOptions___icons'
  | 'pluginCreator___pluginOptions___icons___src'
  | 'pluginCreator___pluginOptions___icons___sizes'
  | 'pluginCreator___pluginOptions___icons___type'
  | 'pluginCreator___pluginOptions___localize'
  | 'pluginCreator___pluginOptions___localize___start_url'
  | 'pluginCreator___pluginOptions___localize___lang'
  | 'pluginCreator___pluginOptions___localize___name'
  | 'pluginCreator___pluginOptions___localize___short_name'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___fonts'
  | 'pluginCreator___pluginOptions___trackingIds'
  | 'pluginCreator___pluginOptions___pluginConfig___head'
  | 'pluginCreator___pluginOptions___configDir'
  | 'pluginCreator___pluginOptions___projectRoot'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type ISitePageFilterInput = {
  path?: Maybe<IStringQueryOperatorInput>;
  component?: Maybe<IStringQueryOperatorInput>;
  internalComponentName?: Maybe<IStringQueryOperatorInput>;
  componentChunkName?: Maybe<IStringQueryOperatorInput>;
  matchPath?: Maybe<IStringQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<IBooleanQueryOperatorInput>;
  context?: Maybe<ISitePageContextFilterInput>;
  pluginCreator?: Maybe<ISitePluginFilterInput>;
  pluginCreatorId?: Maybe<IStringQueryOperatorInput>;
  componentPath?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePageEdge>;
  nodes: Array<ISitePage>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ISitePageSortInput = {
  fields?: Maybe<Array<Maybe<ISitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISitePlugin = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<ISitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<ISitePluginPackageJson>;
};

export type ISitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePluginEdge>;
  nodes: Array<ISitePlugin>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISitePluginGroupConnection>;
};


export type ISitePluginConnectionDistinctArgs = {
  field: ISitePluginFieldsEnum;
};


export type ISitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISitePluginFieldsEnum;
};

export type ISitePluginEdge = {
  next?: Maybe<ISitePlugin>;
  node: ISitePlugin;
  previous?: Maybe<ISitePlugin>;
};

export type ISitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___baseUrl'
  | 'pluginOptions___apiBase'
  | 'pluginOptions___translation'
  | 'pluginOptions___languageConfig___defaultLanguage'
  | 'pluginOptions___languageConfig___enabledLanguages'
  | 'pluginOptions___languageConfig___translatableEntities'
  | 'pluginOptions___languageConfig___translatableEntities___type'
  | 'pluginOptions___languageConfig___translatableEntities___bundle'
  | 'pluginOptions___languageConfig___translatableEntities___id'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___siteName'
  | 'pluginOptions___defaultSiteImage'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___globalSchema'
  | 'pluginOptions___appleTouch'
  | 'pluginOptions___favicon32'
  | 'pluginOptions___favicon16'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___host'
  | 'pluginOptions___sitemap'
  | 'pluginOptions___policy'
  | 'pluginOptions___policy___userAgent'
  | 'pluginOptions___policy___allow'
  | 'pluginOptions___mergeStyleHashes'
  | 'pluginOptions___directives___script_src'
  | 'pluginOptions___directives___style_src'
  | 'pluginOptions___directives___font_src'
  | 'pluginOptions___directives___img_src'
  | 'pluginOptions___directives___connect_src'
  | 'pluginOptions___directives___default_src'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___codegenConfig___typesPrefix'
  | 'pluginOptions___codegenPlugins'
  | 'pluginOptions___codegenPlugins___resolve'
  | 'pluginOptions___codegenPlugins___options___namingConvention'
  | 'pluginOptions___whitelist'
  | 'pluginOptions___short_name'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___background_color'
  | 'pluginOptions___lang'
  | 'pluginOptions___start_url'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___icon_options___purpose'
  | 'pluginOptions___icons'
  | 'pluginOptions___icons___src'
  | 'pluginOptions___icons___sizes'
  | 'pluginOptions___icons___type'
  | 'pluginOptions___localize'
  | 'pluginOptions___localize___start_url'
  | 'pluginOptions___localize___lang'
  | 'pluginOptions___localize___name'
  | 'pluginOptions___localize___short_name'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___fonts'
  | 'pluginOptions___trackingIds'
  | 'pluginOptions___pluginConfig___head'
  | 'pluginOptions___configDir'
  | 'pluginOptions___projectRoot'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type ISitePluginFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  resolve?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
  pluginOptions?: Maybe<ISitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<IStringQueryOperatorInput>;
  browserAPIs?: Maybe<IStringQueryOperatorInput>;
  ssrAPIs?: Maybe<IStringQueryOperatorInput>;
  pluginFilepath?: Maybe<IStringQueryOperatorInput>;
  packageJson?: Maybe<ISitePluginPackageJsonFilterInput>;
};

export type ISitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePluginEdge>;
  nodes: Array<ISitePlugin>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<ISitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<ISitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<ISitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ISitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPackageJsonDependenciesFilterInput>;
};

export type ISitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPackageJsonDevDependenciesFilterInput>;
};

export type ISitePluginPackageJsonFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>;
  description?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
  main?: Maybe<IStringQueryOperatorInput>;
  author?: Maybe<IStringQueryOperatorInput>;
  license?: Maybe<IStringQueryOperatorInput>;
  dependencies?: Maybe<ISitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<ISitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<ISitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type ISitePluginPluginOptions = {
  baseUrl?: Maybe<Scalars['String']>;
  apiBase?: Maybe<Scalars['String']>;
  translation?: Maybe<Scalars['Boolean']>;
  languageConfig?: Maybe<ISitePluginPluginOptionsLanguageConfig>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  defaultSiteImage?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  globalSchema?: Maybe<Scalars['String']>;
  appleTouch?: Maybe<Scalars['String']>;
  favicon32?: Maybe<Scalars['String']>;
  favicon16?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  sitemap?: Maybe<Scalars['String']>;
  policy?: Maybe<Array<Maybe<ISitePluginPluginOptionsPolicy>>>;
  mergeStyleHashes?: Maybe<Scalars['Boolean']>;
  directives?: Maybe<ISitePluginPluginOptionsDirectives>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  codegenConfig?: Maybe<ISitePluginPluginOptionsCodegenConfig>;
  codegenPlugins?: Maybe<Array<Maybe<ISitePluginPluginOptionsCodegenPlugins>>>;
  whitelist?: Maybe<Array<Maybe<Scalars['String']>>>;
  short_name?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  icon_options?: Maybe<ISitePluginPluginOptionsIcon_Options>;
  icons?: Maybe<Array<Maybe<ISitePluginPluginOptionsIcons>>>;
  localize?: Maybe<Array<Maybe<ISitePluginPluginOptionsLocalize>>>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  trackingIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginConfig?: Maybe<ISitePluginPluginOptionsPluginConfig>;
  configDir?: Maybe<Scalars['String']>;
  projectRoot?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type ISitePluginPluginOptionsCodegenConfig = {
  typesPrefix?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsCodegenConfigFilterInput = {
  typesPrefix?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsCodegenPlugins = {
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<ISitePluginPluginOptionsCodegenPluginsOptions>;
};

export type ISitePluginPluginOptionsCodegenPluginsFilterInput = {
  resolve?: Maybe<IStringQueryOperatorInput>;
  options?: Maybe<ISitePluginPluginOptionsCodegenPluginsOptionsFilterInput>;
};

export type ISitePluginPluginOptionsCodegenPluginsFilterListInput = {
  elemMatch?: Maybe<ISitePluginPluginOptionsCodegenPluginsFilterInput>;
};

export type ISitePluginPluginOptionsCodegenPluginsOptions = {
  namingConvention?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsCodegenPluginsOptionsFilterInput = {
  namingConvention?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsDirectives = {
  script_src?: Maybe<Scalars['String']>;
  style_src?: Maybe<Scalars['String']>;
  font_src?: Maybe<Scalars['String']>;
  img_src?: Maybe<Scalars['String']>;
  connect_src?: Maybe<Scalars['String']>;
  default_src?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsDirectivesFilterInput = {
  script_src?: Maybe<IStringQueryOperatorInput>;
  style_src?: Maybe<IStringQueryOperatorInput>;
  font_src?: Maybe<IStringQueryOperatorInput>;
  img_src?: Maybe<IStringQueryOperatorInput>;
  connect_src?: Maybe<IStringQueryOperatorInput>;
  default_src?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsFilterInput = {
  baseUrl?: Maybe<IStringQueryOperatorInput>;
  apiBase?: Maybe<IStringQueryOperatorInput>;
  translation?: Maybe<IBooleanQueryOperatorInput>;
  languageConfig?: Maybe<ISitePluginPluginOptionsLanguageConfigFilterInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<IStringQueryOperatorInput>;
  siteName?: Maybe<IStringQueryOperatorInput>;
  defaultSiteImage?: Maybe<IStringQueryOperatorInput>;
  siteUrl?: Maybe<IStringQueryOperatorInput>;
  globalSchema?: Maybe<IStringQueryOperatorInput>;
  appleTouch?: Maybe<IStringQueryOperatorInput>;
  favicon32?: Maybe<IStringQueryOperatorInput>;
  favicon16?: Maybe<IStringQueryOperatorInput>;
  allExtensions?: Maybe<IBooleanQueryOperatorInput>;
  isTSX?: Maybe<IBooleanQueryOperatorInput>;
  jsxPragma?: Maybe<IStringQueryOperatorInput>;
  host?: Maybe<IStringQueryOperatorInput>;
  sitemap?: Maybe<IStringQueryOperatorInput>;
  policy?: Maybe<ISitePluginPluginOptionsPolicyFilterListInput>;
  mergeStyleHashes?: Maybe<IBooleanQueryOperatorInput>;
  directives?: Maybe<ISitePluginPluginOptionsDirectivesFilterInput>;
  documentPaths?: Maybe<IStringQueryOperatorInput>;
  codegenConfig?: Maybe<ISitePluginPluginOptionsCodegenConfigFilterInput>;
  codegenPlugins?: Maybe<ISitePluginPluginOptionsCodegenPluginsFilterListInput>;
  whitelist?: Maybe<IStringQueryOperatorInput>;
  short_name?: Maybe<IStringQueryOperatorInput>;
  theme_color?: Maybe<IStringQueryOperatorInput>;
  background_color?: Maybe<IStringQueryOperatorInput>;
  lang?: Maybe<IStringQueryOperatorInput>;
  start_url?: Maybe<IStringQueryOperatorInput>;
  display?: Maybe<IStringQueryOperatorInput>;
  icon?: Maybe<IStringQueryOperatorInput>;
  icon_options?: Maybe<ISitePluginPluginOptionsIcon_OptionsFilterInput>;
  icons?: Maybe<ISitePluginPluginOptionsIconsFilterListInput>;
  localize?: Maybe<ISitePluginPluginOptionsLocalizeFilterListInput>;
  cache_busting_mode?: Maybe<IStringQueryOperatorInput>;
  include_favicon?: Maybe<IBooleanQueryOperatorInput>;
  legacy?: Maybe<IBooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<IBooleanQueryOperatorInput>;
  cacheDigest?: Maybe<IStringQueryOperatorInput>;
  fonts?: Maybe<IStringQueryOperatorInput>;
  trackingIds?: Maybe<IStringQueryOperatorInput>;
  pluginConfig?: Maybe<ISitePluginPluginOptionsPluginConfigFilterInput>;
  configDir?: Maybe<IStringQueryOperatorInput>;
  projectRoot?: Maybe<IStringQueryOperatorInput>;
  pathCheck?: Maybe<IBooleanQueryOperatorInput>;
};

export type ISitePluginPluginOptionsIcon_Options = {
  purpose?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsIcon_OptionsFilterInput = {
  purpose?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsIcons = {
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<IStringQueryOperatorInput>;
  sizes?: Maybe<IStringQueryOperatorInput>;
  type?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<ISitePluginPluginOptionsIconsFilterInput>;
};

export type ISitePluginPluginOptionsLanguageConfig = {
  defaultLanguage?: Maybe<Scalars['String']>;
  enabledLanguages?: Maybe<Array<Maybe<Scalars['String']>>>;
  translatableEntities?: Maybe<Array<Maybe<ISitePluginPluginOptionsLanguageConfigTranslatableEntities>>>;
};

export type ISitePluginPluginOptionsLanguageConfigFilterInput = {
  defaultLanguage?: Maybe<IStringQueryOperatorInput>;
  enabledLanguages?: Maybe<IStringQueryOperatorInput>;
  translatableEntities?: Maybe<ISitePluginPluginOptionsLanguageConfigTranslatableEntitiesFilterListInput>;
};

export type ISitePluginPluginOptionsLanguageConfigTranslatableEntities = {
  type?: Maybe<Scalars['String']>;
  bundle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsLanguageConfigTranslatableEntitiesFilterInput = {
  type?: Maybe<IStringQueryOperatorInput>;
  bundle?: Maybe<IStringQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsLanguageConfigTranslatableEntitiesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPluginOptionsLanguageConfigTranslatableEntitiesFilterInput>;
};

export type ISitePluginPluginOptionsLocalize = {
  start_url?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsLocalizeFilterInput = {
  start_url?: Maybe<IStringQueryOperatorInput>;
  lang?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  short_name?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsLocalizeFilterListInput = {
  elemMatch?: Maybe<ISitePluginPluginOptionsLocalizeFilterInput>;
};

export type ISitePluginPluginOptionsPluginConfig = {
  head?: Maybe<Scalars['Boolean']>;
};

export type ISitePluginPluginOptionsPluginConfigFilterInput = {
  head?: Maybe<IBooleanQueryOperatorInput>;
};

export type ISitePluginPluginOptionsPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsPolicyFilterInput = {
  userAgent?: Maybe<IStringQueryOperatorInput>;
  allow?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsPolicyFilterListInput = {
  elemMatch?: Maybe<ISitePluginPluginOptionsPolicyFilterInput>;
};

export type ISitePluginSortInput = {
  fields?: Maybe<Array<Maybe<ISitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type ISiteSiteMetadataFilterInput = {
  title?: Maybe<IStringQueryOperatorInput>;
  description?: Maybe<IStringQueryOperatorInput>;
  siteUrl?: Maybe<IStringQueryOperatorInput>;
};

export type ISiteSortInput = {
  fields?: Maybe<Array<Maybe<ISiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISituation = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__nid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Date']>;
  changed?: Maybe<Scalars['Date']>;
  promote?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['String']>;
  moderation_state?: Maybe<Scalars['String']>;
  path?: Maybe<ISituationPath>;
  meta_description?: Maybe<Scalars['String']>;
  questions_answers?: Maybe<Array<Maybe<ISituationQuestions_Answers>>>;
  links?: Maybe<Array<Maybe<ISituationLinks>>>;
  valid_from?: Maybe<Scalars['Date']>;
  valid_to?: Maybe<Scalars['Date']>;
  content?: Maybe<ISituationContent>;
  relationships?: Maybe<ISituationRelationships>;
  related_situations?: Maybe<Array<Maybe<ISituationRelated_Situations>>>;
};


export type ISituationCreatedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ISituationChangedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ISituationValid_FromArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ISituationValid_ToArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ISituationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISituationEdge>;
  nodes: Array<ISituation>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISituationGroupConnection>;
};


export type ISituationConnectionDistinctArgs = {
  field: ISituationFieldsEnum;
};


export type ISituationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISituationFieldsEnum;
};

export type ISituationContent = {
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
};

export type ISituationContentFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  format?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
};

export type ISituationEdge = {
  next?: Maybe<ISituation>;
  node: ISituation;
  previous?: Maybe<ISituation>;
};

export type ISituationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__nid'
  | 'langcode'
  | 'status'
  | 'title'
  | 'created'
  | 'changed'
  | 'promote'
  | 'sticky'
  | 'moderation_state'
  | 'path___alias'
  | 'path___pid'
  | 'path___langcode'
  | 'meta_description'
  | 'questions_answers'
  | 'questions_answers___value'
  | 'questions_answers___processed'
  | 'questions_answers___question'
  | 'links'
  | 'links___uri'
  | 'links___title'
  | 'valid_from'
  | 'valid_to'
  | 'content___value'
  | 'content___format'
  | 'content___processed'
  | 'relationships___icon___id'
  | 'relationships___icon___parent___id'
  | 'relationships___icon___parent___children'
  | 'relationships___icon___children'
  | 'relationships___icon___children___id'
  | 'relationships___icon___children___children'
  | 'relationships___icon___internal___content'
  | 'relationships___icon___internal___contentDigest'
  | 'relationships___icon___internal___description'
  | 'relationships___icon___internal___fieldOwners'
  | 'relationships___icon___internal___ignoreType'
  | 'relationships___icon___internal___mediaType'
  | 'relationships___icon___internal___owner'
  | 'relationships___icon___internal___type'
  | 'relationships___icon___drupal_id'
  | 'relationships___icon___langcode'
  | 'relationships___icon___path___langcode'
  | 'relationships___icon___code'
  | 'relationships___icon___source'
  | 'relationships___icon___relationships___situation'
  | 'relationships___icon___relationships___area'
  | 'relationships___icon___relationships___measure_type'
  | 'relationships___icon___relationships___measure'
  | 'relationships___region'
  | 'relationships___region___id'
  | 'relationships___region___parent___id'
  | 'relationships___region___parent___children'
  | 'relationships___region___children'
  | 'relationships___region___children___id'
  | 'relationships___region___children___children'
  | 'relationships___region___internal___content'
  | 'relationships___region___internal___contentDigest'
  | 'relationships___region___internal___description'
  | 'relationships___region___internal___fieldOwners'
  | 'relationships___region___internal___ignoreType'
  | 'relationships___region___internal___mediaType'
  | 'relationships___region___internal___owner'
  | 'relationships___region___internal___type'
  | 'relationships___region___drupal_id'
  | 'relationships___region___drupal_internal__tid'
  | 'relationships___region___langcode'
  | 'relationships___region___status'
  | 'relationships___region___name'
  | 'relationships___region___weight'
  | 'relationships___region___changed'
  | 'relationships___region___path___langcode'
  | 'relationships___region___relationships___measure'
  | 'relationships___region___relationships___situation'
  | 'relationships___measures'
  | 'relationships___measures___id'
  | 'relationships___measures___parent___id'
  | 'relationships___measures___parent___children'
  | 'relationships___measures___children'
  | 'relationships___measures___children___id'
  | 'relationships___measures___children___children'
  | 'relationships___measures___internal___content'
  | 'relationships___measures___internal___contentDigest'
  | 'relationships___measures___internal___description'
  | 'relationships___measures___internal___fieldOwners'
  | 'relationships___measures___internal___ignoreType'
  | 'relationships___measures___internal___mediaType'
  | 'relationships___measures___internal___owner'
  | 'relationships___measures___internal___type'
  | 'relationships___measures___drupal_id'
  | 'relationships___measures___drupal_internal__nid'
  | 'relationships___measures___langcode'
  | 'relationships___measures___status'
  | 'relationships___measures___title'
  | 'relationships___measures___created'
  | 'relationships___measures___changed'
  | 'relationships___measures___promote'
  | 'relationships___measures___sticky'
  | 'relationships___measures___moderation_state'
  | 'relationships___measures___path___alias'
  | 'relationships___measures___path___pid'
  | 'relationships___measures___path___langcode'
  | 'relationships___measures___description___value'
  | 'relationships___measures___description___format'
  | 'relationships___measures___description___processed'
  | 'relationships___measures___meta_description'
  | 'relationships___measures___norm'
  | 'relationships___measures___source___uri'
  | 'relationships___measures___source___title'
  | 'relationships___measures___valid_from'
  | 'relationships___measures___valid_to'
  | 'relationships___measures___relationships___homepage'
  | 'relationships___measures___relationships___region'
  | 'relationships___measures___relationships___situation'
  | 'relationships___situation_type___id'
  | 'relationships___situation_type___parent___id'
  | 'relationships___situation_type___parent___children'
  | 'relationships___situation_type___children'
  | 'relationships___situation_type___children___id'
  | 'relationships___situation_type___children___children'
  | 'relationships___situation_type___internal___content'
  | 'relationships___situation_type___internal___contentDigest'
  | 'relationships___situation_type___internal___description'
  | 'relationships___situation_type___internal___fieldOwners'
  | 'relationships___situation_type___internal___ignoreType'
  | 'relationships___situation_type___internal___mediaType'
  | 'relationships___situation_type___internal___owner'
  | 'relationships___situation_type___internal___type'
  | 'relationships___situation_type___drupal_id'
  | 'relationships___situation_type___drupal_internal__tid'
  | 'relationships___situation_type___langcode'
  | 'relationships___situation_type___status'
  | 'relationships___situation_type___name'
  | 'relationships___situation_type___weight'
  | 'relationships___situation_type___changed'
  | 'relationships___situation_type___path___alias'
  | 'relationships___situation_type___path___pid'
  | 'relationships___situation_type___path___langcode'
  | 'relationships___situation_type___relationships___situation'
  | 'relationships___situation_type___relationships___homepage'
  | 'relationships___related_situations'
  | 'relationships___related_situations___id'
  | 'relationships___related_situations___parent___id'
  | 'relationships___related_situations___parent___children'
  | 'relationships___related_situations___children'
  | 'relationships___related_situations___children___id'
  | 'relationships___related_situations___children___children'
  | 'relationships___related_situations___internal___content'
  | 'relationships___related_situations___internal___contentDigest'
  | 'relationships___related_situations___internal___description'
  | 'relationships___related_situations___internal___fieldOwners'
  | 'relationships___related_situations___internal___ignoreType'
  | 'relationships___related_situations___internal___mediaType'
  | 'relationships___related_situations___internal___owner'
  | 'relationships___related_situations___internal___type'
  | 'relationships___related_situations___drupal_id'
  | 'relationships___related_situations___drupal_internal__nid'
  | 'relationships___related_situations___langcode'
  | 'relationships___related_situations___status'
  | 'relationships___related_situations___title'
  | 'relationships___related_situations___created'
  | 'relationships___related_situations___changed'
  | 'relationships___related_situations___promote'
  | 'relationships___related_situations___sticky'
  | 'relationships___related_situations___moderation_state'
  | 'relationships___related_situations___path___alias'
  | 'relationships___related_situations___path___pid'
  | 'relationships___related_situations___path___langcode'
  | 'relationships___related_situations___meta_description'
  | 'relationships___related_situations___questions_answers'
  | 'relationships___related_situations___questions_answers___value'
  | 'relationships___related_situations___questions_answers___processed'
  | 'relationships___related_situations___questions_answers___question'
  | 'relationships___related_situations___links'
  | 'relationships___related_situations___links___uri'
  | 'relationships___related_situations___links___title'
  | 'relationships___related_situations___valid_from'
  | 'relationships___related_situations___valid_to'
  | 'relationships___related_situations___content___value'
  | 'relationships___related_situations___content___format'
  | 'relationships___related_situations___content___processed'
  | 'relationships___related_situations___relationships___region'
  | 'relationships___related_situations___relationships___measures'
  | 'relationships___related_situations___relationships___related_situations'
  | 'relationships___related_situations___relationships___situation'
  | 'relationships___related_situations___related_situations'
  | 'relationships___related_situations___related_situations___arity'
  | 'relationships___situation'
  | 'relationships___situation___id'
  | 'relationships___situation___parent___id'
  | 'relationships___situation___parent___children'
  | 'relationships___situation___children'
  | 'relationships___situation___children___id'
  | 'relationships___situation___children___children'
  | 'relationships___situation___internal___content'
  | 'relationships___situation___internal___contentDigest'
  | 'relationships___situation___internal___description'
  | 'relationships___situation___internal___fieldOwners'
  | 'relationships___situation___internal___ignoreType'
  | 'relationships___situation___internal___mediaType'
  | 'relationships___situation___internal___owner'
  | 'relationships___situation___internal___type'
  | 'relationships___situation___drupal_id'
  | 'relationships___situation___drupal_internal__nid'
  | 'relationships___situation___langcode'
  | 'relationships___situation___status'
  | 'relationships___situation___title'
  | 'relationships___situation___created'
  | 'relationships___situation___changed'
  | 'relationships___situation___promote'
  | 'relationships___situation___sticky'
  | 'relationships___situation___moderation_state'
  | 'relationships___situation___path___alias'
  | 'relationships___situation___path___pid'
  | 'relationships___situation___path___langcode'
  | 'relationships___situation___meta_description'
  | 'relationships___situation___questions_answers'
  | 'relationships___situation___questions_answers___value'
  | 'relationships___situation___questions_answers___processed'
  | 'relationships___situation___questions_answers___question'
  | 'relationships___situation___links'
  | 'relationships___situation___links___uri'
  | 'relationships___situation___links___title'
  | 'relationships___situation___valid_from'
  | 'relationships___situation___valid_to'
  | 'relationships___situation___content___value'
  | 'relationships___situation___content___format'
  | 'relationships___situation___content___processed'
  | 'relationships___situation___relationships___region'
  | 'relationships___situation___relationships___measures'
  | 'relationships___situation___relationships___related_situations'
  | 'relationships___situation___relationships___situation'
  | 'relationships___situation___related_situations'
  | 'relationships___situation___related_situations___arity'
  | 'related_situations'
  | 'related_situations___arity';

export type ISituationFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__nid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  status?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
  created?: Maybe<IDateQueryOperatorInput>;
  changed?: Maybe<IDateQueryOperatorInput>;
  promote?: Maybe<IStringQueryOperatorInput>;
  sticky?: Maybe<IStringQueryOperatorInput>;
  moderation_state?: Maybe<IStringQueryOperatorInput>;
  path?: Maybe<ISituationPathFilterInput>;
  meta_description?: Maybe<IStringQueryOperatorInput>;
  questions_answers?: Maybe<ISituationQuestions_AnswersFilterListInput>;
  links?: Maybe<ISituationLinksFilterListInput>;
  valid_from?: Maybe<IDateQueryOperatorInput>;
  valid_to?: Maybe<IDateQueryOperatorInput>;
  content?: Maybe<ISituationContentFilterInput>;
  relationships?: Maybe<ISituationRelationshipsFilterInput>;
  related_situations?: Maybe<ISituationRelated_SituationsFilterListInput>;
};

export type ISituationFilterListInput = {
  elemMatch?: Maybe<ISituationFilterInput>;
};

export type ISituationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISituationEdge>;
  nodes: Array<ISituation>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ISituationLinks = {
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ISituationLinksFilterInput = {
  uri?: Maybe<IStringQueryOperatorInput>;
  title?: Maybe<IStringQueryOperatorInput>;
};

export type ISituationLinksFilterListInput = {
  elemMatch?: Maybe<ISituationLinksFilterInput>;
};

export type ISituationPath = {
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
};

export type ISituationPathFilterInput = {
  alias?: Maybe<IStringQueryOperatorInput>;
  pid?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
};

export type ISituationQuestions_Answers = {
  value?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

export type ISituationQuestions_AnswersFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>;
  processed?: Maybe<IStringQueryOperatorInput>;
  question?: Maybe<IStringQueryOperatorInput>;
};

export type ISituationQuestions_AnswersFilterListInput = {
  elemMatch?: Maybe<ISituationQuestions_AnswersFilterInput>;
};

export type ISituationRelated_Situations = {
  arity?: Maybe<Scalars['Int']>;
};

export type ISituationRelated_SituationsFilterInput = {
  arity?: Maybe<IIntQueryOperatorInput>;
};

export type ISituationRelated_SituationsFilterListInput = {
  elemMatch?: Maybe<ISituationRelated_SituationsFilterInput>;
};

export type ISituationRelationships = {
  icon?: Maybe<IIcons>;
  region?: Maybe<Array<Maybe<IRegion>>>;
  measures?: Maybe<Array<Maybe<IMeasure>>>;
  situation_type?: Maybe<IArea>;
  related_situations?: Maybe<Array<Maybe<ISituation>>>;
  situation?: Maybe<Array<Maybe<ISituation>>>;
};

export type ISituationRelationshipsFilterInput = {
  icon?: Maybe<IIconsFilterInput>;
  region?: Maybe<IRegionFilterListInput>;
  measures?: Maybe<IMeasureFilterListInput>;
  situation_type?: Maybe<IAreaFilterInput>;
  related_situations?: Maybe<ISituationFilterListInput>;
  situation?: Maybe<ISituationFilterListInput>;
};

export type ISituationSortInput = {
  fields?: Maybe<Array<Maybe<ISituationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type IStringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ITranslation = INode & {
  id: Scalars['ID'];
  parent?: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  drupal_id?: Maybe<Scalars['String']>;
  drupal_internal__id?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

export type ITranslationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ITranslationEdge>;
  nodes: Array<ITranslation>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ITranslationGroupConnection>;
};


export type ITranslationConnectionDistinctArgs = {
  field: ITranslationFieldsEnum;
};


export type ITranslationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ITranslationFieldsEnum;
};

export type ITranslationEdge = {
  next?: Maybe<ITranslation>;
  node: ITranslation;
  previous?: Maybe<ITranslation>;
};

export type ITranslationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'drupal_id'
  | 'drupal_internal__id'
  | 'langcode'
  | 'source'
  | 'target';

export type ITranslationFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  drupal_id?: Maybe<IStringQueryOperatorInput>;
  drupal_internal__id?: Maybe<IStringQueryOperatorInput>;
  langcode?: Maybe<IStringQueryOperatorInput>;
  source?: Maybe<IStringQueryOperatorInput>;
  target?: Maybe<IStringQueryOperatorInput>;
};

export type ITranslationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ITranslationEdge>;
  nodes: Array<ITranslation>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ITranslationSortInput = {
  fields?: Maybe<Array<Maybe<ITranslationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IFooterLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type IFooterLinksQuery = { allBlocks: { edges: Array<{ node: (
        Pick<IBlocks, 'drupal_internal__id' | 'langcode'>
        & { content?: Maybe<Pick<IBlocksContent, 'processed'>> }
      ) }> } };

export type II18nQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type II18nQueryQuery = { allTranslation: { nodes: Array<Pick<ITranslation, 'langcode' | 'source' | 'target'>> } };

export type IMeasureDetailFragment = (
  Pick<IMeasure, 'title' | 'norm' | 'changed' | 'valid_from' | 'valid_to'>
  & { content?: Maybe<Pick<IMeasureDescription, 'processed'>>, source?: Maybe<Pick<IMeasureSource, 'uri' | 'title'>>, relationships?: Maybe<{ region?: Maybe<Array<Maybe<Pick<IRegion, 'name'>>>>, situation_type?: Maybe<(
      Pick<IMeasure_Type, 'name'>
      & { path?: Maybe<Pick<IMeasure_TypePath, 'alias'>> }
    )>, related_situations?: Maybe<Array<Maybe<Pick<ISituation, 'title'>>>> }>, path?: Maybe<Pick<IMeasurePath, 'alias'>> }
);

export type IRelatedMeasureFragment = (
  Pick<IMeasure, 'title' | 'valid_from' | 'valid_to'>
  & { path?: Maybe<Pick<IMeasurePath, 'alias' | 'langcode'>>, relationships?: Maybe<{ region?: Maybe<Array<Maybe<Pick<IRegion, 'name'>>>> }> }
);

export type ISituationDetailFragment = (
  Pick<ISituation, 'title' | 'changed' | 'valid_from' | 'valid_to'>
  & { content?: Maybe<Pick<ISituationContent, 'processed'>>, links?: Maybe<Array<Maybe<Pick<ISituationLinks, 'uri' | 'title'>>>>, relationships?: Maybe<{ region?: Maybe<Array<Maybe<Pick<IRegion, 'name'>>>>, situation_type?: Maybe<(
      Pick<IArea, 'name'>
      & { path?: Maybe<Pick<IAreaPath, 'alias'>> }
    )>, measures?: Maybe<Array<Maybe<IRelatedMeasureFragment>>> }>, path?: Maybe<Pick<ISituationPath, 'alias'>>, questions_answers?: Maybe<Array<Maybe<Pick<ISituationQuestions_Answers, 'question' | 'value'>>>> }
);

export type IUnnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type IUnnamed_1_Query = { mobileImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<Pick<IImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }>, desktopImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<Pick<IImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>> }> }> };

export type IUnnamed_2_QueryVariables = Exact<{
  slug: Scalars['String'];
  langCode: Scalars['String'];
}>;


export type IUnnamed_2_Query = { page?: Maybe<(
    Pick<IPage, 'id' | 'langcode' | 'title' | 'changed' | 'meta_description'>
    & { content?: Maybe<Pick<IPageContent, 'processed'>>, path?: Maybe<Pick<IPagePath, 'alias'>> }
  )>, translation?: Maybe<Pick<ITranslation, 'target'>> };

export type IIndexQueryQueryVariables = Exact<{
  langCode: Scalars['String'];
}>;


export type IIndexQueryQuery = { homepage?: Maybe<(
    Pick<IHomepage, 'langcode' | 'measure_description' | 'situation_description' | 'meta_description' | 'moderation_state' | 'measure_text' | 'situation_text'>
    & { measure_link?: Maybe<Pick<IHomepageMeasure_Link, 'uri' | 'title'>>, measure_label?: Maybe<Pick<IHomepageMeasure_Label, 'processed'>>, situation_label?: Maybe<Pick<IHomepageSituation_Label, 'processed'>>, situation_link?: Maybe<Pick<IHomepageSituation_Link, 'uri' | 'title'>>, relationships?: Maybe<{ measure_items?: Maybe<Array<Maybe<(
        Pick<IMeasure, 'id' | 'title' | 'norm' | 'valid_from' | 'valid_to'>
        & { path?: Maybe<Pick<IMeasurePath, 'alias'>>, relationships?: Maybe<{ region?: Maybe<Array<Maybe<Pick<IRegion, 'name'>>>> }> }
      )>>>, situation_items?: Maybe<Array<Maybe<(
        Pick<IArea, 'id' | 'name'>
        & { path?: Maybe<Pick<IAreaPath, 'alias'>>, relationships?: Maybe<{ icon?: Maybe<Pick<IIcons, 'code'>> }> }
      )>>> }> }
  )> };

export type IMeasureTypeQueryQueryVariables = Exact<{
  langCode: Scalars['String'];
}>;


export type IMeasureTypeQueryQuery = { allMeasureType: { nodes: Array<(
      Pick<IMeasure_Type, 'id' | 'name'>
      & { path?: Maybe<Pick<IMeasure_TypePath, 'alias'>>, relationships?: Maybe<{ icon?: Maybe<Pick<IIcons, 'code'>>, measure?: Maybe<Array<Maybe<Pick<IMeasure, 'id'>>>> }> }
    )> }, searchingTitle?: Maybe<Pick<ITranslation, 'langcode' | 'target'>>, searchingDescription?: Maybe<Pick<ITranslation, 'target'>>, callTitle?: Maybe<Pick<ITranslation, 'target'>>, callDescription?: Maybe<Pick<ITranslation, 'target'>> };

export type ISituationTypeQueryQueryVariables = Exact<{
  langCode: Scalars['String'];
}>;


export type ISituationTypeQueryQuery = { allArea: { nodes: Array<(
      Pick<IArea, 'name' | 'id'>
      & { path?: Maybe<Pick<IAreaPath, 'alias'>>, relationships?: Maybe<{ situation?: Maybe<Array<Maybe<Pick<ISituation, 'id'>>>>, icon?: Maybe<Pick<IIcons, 'code'>> }> }
    )> }, searchingTitle?: Maybe<Pick<ITranslation, 'target' | 'langcode'>>, searchingDescription?: Maybe<Pick<ITranslation, 'target'>>, callTitle?: Maybe<Pick<ITranslation, 'target'>>, callDescription?: Maybe<Pick<ITranslation, 'target'>> };

export type IUnnamed_3_QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IUnnamed_3_Query = { measureType?: Maybe<(
    Pick<IMeasure_Type, 'name'>
    & { relationships?: Maybe<{ measure?: Maybe<Array<Maybe<(
        Pick<IMeasure, 'valid_from' | 'valid_to' | 'id' | 'norm' | 'title'>
        & { relationships?: Maybe<{ region?: Maybe<Array<Maybe<Pick<IRegion, 'name'>>>> }>, path?: Maybe<Pick<IMeasurePath, 'alias'>> }
      )>>> }> }
  )> };

export type IMeasurePageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IMeasurePageQueryQuery = { measure?: Maybe<(
    Pick<IMeasure, 'title' | 'meta_description' | 'langcode' | 'valid_from'>
    & { content?: Maybe<Pick<IMeasureDescription, 'processed'>>, path?: Maybe<Pick<IMeasurePath, 'alias'>> }
    & IMeasureDetailFragment
  )> };

export type IUnnamed_4_QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IUnnamed_4_Query = { area?: Maybe<(
    Pick<IArea, 'name'>
    & { relationships?: Maybe<{ situation?: Maybe<Array<Maybe<(
        Pick<ISituation, 'id' | 'title' | 'meta_description'>
        & { path?: Maybe<Pick<ISituationPath, 'alias'>> }
      )>>> }> }
  )> };

export type IUnnamed_5_QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IUnnamed_5_Query = { situation?: Maybe<(
    Pick<ISituation, 'title' | 'meta_description' | 'changed' | 'valid_from'>
    & { content?: Maybe<Pick<ISituationContent, 'processed'>>, questions_answers?: Maybe<Array<Maybe<Pick<ISituationQuestions_Answers, 'question' | 'value'>>>>, relationships?: Maybe<{ related_situations?: Maybe<Array<Maybe<(
        Pick<ISituation, 'title'>
        & { path?: Maybe<Pick<ISituationPath, 'alias' | 'langcode'>> }
      )>>> }>, path?: Maybe<Pick<ISituationPath, 'alias'>> }
    & ISituationDetailFragment
  )> };

export type IUnnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type IUnnamed_6_Query = { allTranslation: { nodes: Array<Pick<ITranslation, 'langcode' | 'source' | 'target'>> }, allArea: { edges: Array<{ node: (
        Pick<IArea, 'langcode' | 'drupal_id'>
        & { path?: Maybe<Pick<IAreaPath, 'alias'>>, relationships?: Maybe<{ situation?: Maybe<Array<Maybe<(
            Pick<ISituation, 'langcode' | 'drupal_id'>
            & { path?: Maybe<Pick<ISituationPath, 'alias'>> }
          )>>> }> }
      ) }> }, allMeasureType: { edges: Array<{ node: (
        Pick<IMeasure_Type, 'langcode' | 'drupal_id'>
        & { path?: Maybe<Pick<IMeasure_TypePath, 'alias'>>, relationships?: Maybe<{ measure?: Maybe<Array<Maybe<(
            Pick<IMeasure, 'langcode' | 'drupal_id'>
            & { path?: Maybe<Pick<IMeasurePath, 'alias'>> }
          )>>> }> }
      ) }> }, allPage: { nodes: Array<(
      Pick<IPage, 'id' | 'title' | 'langcode' | 'drupal_id'>
      & { path?: Maybe<Pick<IPagePath, 'alias'>> }
    )> } };

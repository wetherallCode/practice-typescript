/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allTrails
// ====================================================

export interface allTrails_allTrails {
  __typename: "Trail";
  /**
   * A unique identifier for a `Trail` (id: 'hemmed-slacks')
   */
  id: string;
  /**
   * The name of a `Trail`
   */
  name: string;
}

export interface allTrails {
  /**
   * A list of all `Trail` objects
   */
  allTrails: allTrails_allTrails[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: trailCount
// ====================================================

export interface trailCount {
  /**
   * Returns an `Int` of `Trail` objects with optional `TrailStatus` filter
   */
  trailCount: number;
}

export interface trailCountVariables {
  status?: TrailStatus | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: trailInfo
// ====================================================

export interface trailInfo_Trail_accessedByLifts {
  __typename: "Lift";
  /**
   * The name of a `Lift`
   */
  name: string;
}

export interface trailInfo_Trail {
  __typename: "Trail";
  /**
   * The name of a `Trail`
   */
  name: string;
  /**
   * The current status for a `Trail`: OPEN, CLOSED
   */
  status: TrailStatus | null;
  /**
   * The difficulty rating for a `Trail`
   */
  difficulty: string;
  /**
   * A list of Lifts that provide access to this `Trail`
   */
  accessedByLifts: trailInfo_Trail_accessedByLifts[];
}

export interface trailInfo {
  /**
   * Returns a `Trail` by `id` (id: "old-witch")
   */
  Trail: trailInfo_Trail;
}

export interface trailInfoVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enum describing the options for `TrailStatus`: `OPEN`, `CLOSED`
 */
export enum TrailStatus {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

//==============================================================
// END Enums and Input Objects
//==============================================================

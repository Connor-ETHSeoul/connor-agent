// version.ts
let currentMajorVersion = 1;
let currentMinorVersion = 0;
let currentPatchVersion = 0;

export function getCurrentVersion() {
  return `${currentMajorVersion}.${currentMinorVersion}.${currentPatchVersion}`;
}

export function incrementMajorVersion() {
  currentMajorVersion++;
}

export function incrementMinorVersion() {
  currentMinorVersion++;
}

export function incrementPatchVersion() {
  currentPatchVersion++;
}


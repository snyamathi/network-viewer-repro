"use client"

import { NetworkViewer } from "network-viewer-unpatched";
import data from './har.json';

export default function Page() {
  return (
    <>
      <h1>NOT Patched</h1>
      <NetworkViewer data={data}/>
    </>
  )
}

"use client"

import { NetworkViewer } from "network-viewer";
import data from '../har.json';

export default function Page() {
  return (
    <>
      <h1>Patched</h1>
      <NetworkViewer data={data}/>
    </>
  )
}

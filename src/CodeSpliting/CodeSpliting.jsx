import React, { lazy, Suspense } from 'react'

const LazyComponent=lazy(()=>import ('./LazyComponent'));

const CodeSpliting = () => {
  return (
    <div>
        <Suspense fallback={<h1>Fallback</h1>}>
            <LazyComponent />
        </Suspense>
      
    </div>
  )
}

export default CodeSpliting

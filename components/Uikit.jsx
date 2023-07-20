import { useCallback, useEffect } from 'react';
const UIkit = ({ children }) => {
  const importUIkit = useCallback(async () => {
    const UIkit = (await import('uikit/dist/js/uikit.min')).default
    const Icons = (await import('uikit/dist/js/uikit-icons.min')).default
    UIkit.use(Icons)
  }, [])

  useEffect(() => {
    importUIkit()
  }, [importUIkit])

  return children
}

export default UIkit
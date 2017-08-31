# Minor Bug Tracker

## #2

No transition when opening a Promised submenu. Will be fixed be sorting out a transition wrapper (as per issue noted in Styling example.)

## #3

Sort out the examples. They messy, not very organised, need building and uploading to github pages or downplay.co.

## #4

Question use of invariant. It's used sporadically and inconsistently. Either sort this out
or lose the dep.

## #5

Reduce overall code to make bundle happier. There are some things that could be combined (e.g. creating menu object in two different places, generally some duping between MenuManager and ContextMenuProvider). Also long lists of props, proptypes, sanitizeprops.

## #6

Change uses to onFoo to handleFoo where appropriate.

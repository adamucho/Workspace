###**Block** elements (display:block by default)

- Starts on a new line
- Takes up all available width by default
- exmplaes (div, p, ul, li)
  | CSS Property | Is the value adjustable? |
  | ------------ | ------------------------ |
  | Width        | Yes                      |
  | Height       | Yes                      |
  | Padding      | Yes                      |
  | Margin       | Yes                      |

##Display type

###inline elements (display:inline by default)

- Does not start on a new line
- Its width is determined by its content
- examples (span, em, a, img)
  | CSS Property | Is the value adjustable?                 |
  | ------------ | ---------------------------------------- |
  | Width        | **No**                                   |
  | Height       | **No**, an alternative is `line-height`  |
  | Padding      | **Yes** (left/right), **Yes, but neighbording content is unaffected** (top/bottom) |
  | Margin       | **Yes** (left/right), **Yes, but neighbording content is unaffected**  (top/bottom) |

#### **inline block** (display: inline-block)

- Display inline, like an inline element
- Its box can be adjusted like a block element
- examples: many browsers display img as inline-block by default
  | CSS Property | Is the value adjustable? |
  | ------------ | ------------------------ |
  | Width        | **Yes**                  |
  | Height       | **Yes**                  |
  | Padding      | **Yes**                  |
  | Margin       | **Yes**                  |
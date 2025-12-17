;; ------------------------------------------------------------
;; ONE WORD STORY v2 - Clarity Contract
;; - Unlimited number of words (no small fixed list cap)
;; - Each entry is:
;;     - id        : auto-incrementing uint
;;     - word      : (string-ascii 32)
;;     - sender    : principal
;;     - timestamp : uint
;;     - category  : (string-ascii 32), e.g. "general", "tech"
;; ------------------------------------------------------------

;; Error codes
(define-constant ERR-WORD-NOT-FOUND (err u300))

;; Default category used when caller does not provide one
;; or provides an empty string.
(define-constant DEFAULT-CATEGORY "general")

;; ------------------------------------------------------------
;; DATA: Auto-incrementing ID counter for words
;; Starts at 0; each new word uses the current value, then increments.
;; ------------------------------------------------------------
(define-data-var next-word-id uint u0)

;; ------------------------------------------------------------
;; DATA: Storage for all words
;; Keyed by auto-incrementing id.
;; ------------------------------------------------------------
(define-map words
  {
    id: uint
  }
  {
    word: (string-ascii 32),
    sender: principal,
    timestamp: uint,
    category: (string-ascii 32)
  }
)



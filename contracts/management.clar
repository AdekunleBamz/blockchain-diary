;; ------------------------------------------------------------
;; STORY MANAGEMENT Clarity 4 Contract
;; Manages multiple stories: create, list, complete, archive
;; Each story has metadata: title, description, status, etc.
;; ------------------------------------------------------------

;; Error codes
(define-constant ERR-STORY-NOT-FOUND (err u200))
(define-constant ERR-STORY-ALREADY-COMPLETE (err u201))
(define-constant ERR-STORY-ALREADY-ARCHIVED (err u202))
(define-constant ERR-INVALID-TITLE (err u203))


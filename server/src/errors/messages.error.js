// errors/errorMessages.js
export const errorMessages = {
  // Authentication Errors (1000-1099)
  AUTH: {
    INVALID_CREDENTIALS: {
      message: 'Invalid email or password',
      statusCode: 401,
      errorCode: 1001
    },
    NO_TOKEN: {
      message: 'You are not logged in! Please log in to get access.',
      statusCode: 401,
      errorCode: 1002
    },
    INVALID_TOKEN: {
      message: 'Invalid token. Please log in again.',
      statusCode: 401,
      errorCode: 1003
    },
    EXPIRED_TOKEN: {
      message: 'Your token has expired! Please log in again.',
      statusCode: 401,
      errorCode: 1004
    },
    USER_NOT_FOUND: {
      message: 'The user belonging to this token does no longer exist.',
      statusCode: 401,
      errorCode: 1005
    },
    PASSWORD_CHANGED: {
      message: 'User recently changed password! Please log in again.',
      statusCode: 401,
      errorCode: 1006
    },
    INSUFFICIENT_PERMISSIONS: {
      message: 'You do not have permission to perform this action',
      statusCode: 403,
      errorCode: 1007
    },
    EMAIL_NOT_VERIFIED: {
      message: 'Please verify your email address to access this resource',
      statusCode: 403,
      errorCode: 1008
    }
  },

  // User Errors (1100-1199)
  USER: {
    NOT_FOUND: {
      message: 'User not found',
      statusCode: 404,
      errorCode: 1101
    },
    EMAIL_EXISTS: {
      message: 'User with this email already exists',
      statusCode: 400,
      errorCode: 1102
    },
    INVALID_EMAIL: {
      message: 'Please provide a valid email',
      statusCode: 400,
      errorCode: 1103
    },
    WEAK_PASSWORD: {
      message: 'Password must be at least 6 characters',
      statusCode: 400,
      errorCode: 1104
    },
    PASSWORDS_DONT_MATCH: {
      message: 'Passwords do not match',
      statusCode: 400,
      errorCode: 1105
    },
    INVALID_PROFESSION: {
      message: 'Invalid profession selected',
      statusCode: 400,
      errorCode: 1106
    },
    PROFILE_INCOMPLETE: {
      message: 'User profile is incomplete',
      statusCode: 400,
      errorCode: 1107
    }
  },

  // Validation Errors (1200-1299)
  VALIDATION: {
    INVALID_INPUT: {
      message: 'Invalid input data',
      statusCode: 400,
      errorCode: 1201
    },
    MISSING_FIELDS: {
      message: 'Please provide all required fields',
      statusCode: 400,
      errorCode: 1202
    },
    INVALID_EMAIL_FORMAT: {
      message: 'Please provide a valid email format',
      statusCode: 400,
      errorCode: 1203
    },
    INVALID_TIME_FORMAT: {
      message: 'Please provide time in HH:MM format',
      statusCode: 400,
      errorCode: 1204
    },
    INVALID_COLOR_FORMAT: {
      message: 'Invalid color format. Please use hex format (#RRGGBB)',
      statusCode: 400,
      errorCode: 1205
    },
    INVALID_DATE_RANGE: {
      message: 'Invalid date range provided',
      statusCode: 400,
      errorCode: 1206
    }
  },

  // Resource Errors (1300-1399)
  RESOURCE: {
    NOT_FOUND: {
      message: 'Resource not found',
      statusCode: 404,
      errorCode: 1301
    },
    ALREADY_EXISTS: {
      message: 'Resource already exists',
      statusCode: 400,
      errorCode: 1302
    },
    CONFLICT: {
      message: 'Resource conflict detected',
      statusCode: 409,
      errorCode: 1303
    },
    DELETED: {
      message: 'Resource has been deleted',
      statusCode: 404,
      errorCode: 1304
    },
    ACCESS_DENIED: {
      message: 'You do not have access to this resource',
      statusCode: 403,
      errorCode: 1305
    }
  },

  // Habit Errors (1400-1499)
  HABIT: {
    NOT_FOUND: {
      message: 'Habit not found',
      statusCode: 404,
      errorCode: 1401
    },
    INVALID_TYPE: {
      message: 'Habit type must be either "build" or "break"',
      statusCode: 400,
      errorCode: 1402
    },
    TIMER_NOT_ACTIVE: {
      message: 'Habit timer is not active',
      statusCode: 400,
      errorCode: 1403
    },
    INVALID_TARGET: {
      message: 'Invalid habit target',
      statusCode: 400,
      errorCode: 1404
    },
    STREAK_BROKEN: {
      message: 'Habit streak has been broken',
      statusCode: 400,
      errorCode: 1405
    }
  },

  // Timetable Errors (1500-1599)
  TIMETABLE: {
    NOT_FOUND: {
      message: 'Timetable not found',
      statusCode: 404,
      errorCode: 1501
    },
    NO_ACTIVE_TIMETABLE: {
      message: 'No active timetable found',
      statusCode: 404,
      errorCode: 1502
    },
    SCHEDULING_CONFLICT: {
      message: 'Scheduling conflict detected',
      statusCode: 409,
      errorCode: 1503
    },
    INVALID_TIME_SLOT: {
      message: 'Invalid time slot',
      statusCode: 400,
      errorCode: 1504
    },
    OVERLAPPING_SLOTS: {
      message: 'Time slots cannot overlap',
      statusCode: 400,
      errorCode: 1505
    },
    PAST_SCHEDULING: {
      message: 'Cannot schedule activities in the past',
      statusCode: 400,
      errorCode: 1506
    }
  },

  // Task Errors (1600-1699)
  TASK: {
    NOT_FOUND: {
      message: 'Task not found',
      statusCode: 404,
      errorCode: 1601
    },
    INVALID_PRIORITY: {
      message: 'Priority must be: very-low, low, medium, high, or very-high',
      statusCode: 400,
      errorCode: 1602
    },
    INVALID_CATEGORY: {
      message: 'Invalid task category',
      statusCode: 400,
      errorCode: 1603
    },
    DEADLINE_PASSED: {
      message: 'Task deadline has already passed',
      statusCode: 400,
      errorCode: 1604
    },
    ALREADY_COMPLETED: {
      message: 'Task is already completed',
      statusCode: 400,
      errorCode: 1605
    }
  },

  // AI Service Errors (1700-1799)
  AI_SERVICE: {
    GENERATION_FAILED: {
      message: 'Failed to generate timetable',
      statusCode: 500,
      errorCode: 1701
    },
    SERVICE_UNAVAILABLE: {
      message: 'AI service is temporarily unavailable',
      statusCode: 503,
      errorCode: 1702
    },
    INVALID_PROMPT: {
      message: 'Invalid input for AI generation',
      statusCode: 400,
      errorCode: 1703
    },
    RATE_LIMITED: {
      message: 'AI service rate limit exceeded',
      statusCode: 429,
      errorCode: 1704
    }
  },

  // Server Errors (5000-5099)
  SERVER: {
    INTERNAL_ERROR: {
      message: 'Internal server error',
      statusCode: 500,
      errorCode: 5001
    },
    DATABASE_ERROR: {
      message: 'Database operation failed',
      statusCode: 500,
      errorCode: 5002
    },
    EXTERNAL_SERVICE_ERROR: {
      message: 'External service temporarily unavailable',
      statusCode: 503,
      errorCode: 5003
    },
    EMAIL_SEND_FAILED: {
      message: 'Failed to send email',
      statusCode: 500,
      errorCode: 5004
    },
    FILE_UPLOAD_ERROR: {
      message: 'File upload failed',
      statusCode: 500,
      errorCode: 5005
    }
  },

  // Rate Limiting Errors (6000-6099)
  RATE_LIMIT: {
    TOO_MANY_REQUESTS: {
      message: 'Too many requests, please try again later',
      statusCode: 429,
      errorCode: 6001
    }
  }
};

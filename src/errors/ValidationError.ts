import IValidationError from '../common/interfaces/IValidationError';

class ValidationError extends Error {
  private field: string;

  private error: string;

  constructor(field: string, message: string) {
    super('Erro de validação');
    this.name = 'ValidationError';
    this.field = field;
    this.error = message;
  }

  getError(): IValidationError {
    return {
      field: this.field,
      error: this.error,
    };
  }
}
export default ValidationError;

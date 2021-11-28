class Types::UserError < Types::BaseObject
  description 'A user-readable error'

  field :attribute, String, null: true, description: 'Which input value this error came from'
  field :messages, [String], null: false, description: 'A description of the error'
end

interface ISUUnarchiverProtocol {
  unarchiveWithCompletionBlock_progressBlock(completionBlock: Block, progressBlock: Block): void;
  description(): NSString;
}

